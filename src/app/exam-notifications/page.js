"use client"
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { Bell, Calendar, FileText, Link as LinkIcon, Loader2, AlertCircle } from 'lucide-react'

export default function ExamNotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotifications()
    }, [])

    const fetchNotifications = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api('notifications?type=exam');
            const data = Array.isArray(res) ? res : (res.data || []);

            const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setNotifications(sorted);
        } catch (error) {
            console.error('Error fetching notifications:', error);
            setError(error.message || "Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    }

    const formatDate = (dateString) => {
        if (!dateString) return 'Recent';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-[#EEEDF0] min-h-screen pb-20">
            {/* HERO SECTION */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[350px] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl mix-blend-screen" />

                <div className="relative z-10 flex flex-col h-full items-center justify-center px-4 w-full text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                        Exam <span className="text-orange-400">Notifications</span>
                    </h1>
                </div>
            </div>

            {/* NOTIFICATIONS LIST */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 mt-10 relative z-10">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-10 h-10 animate-spin text-orange-500 mb-4" />
                        <p className="text-slate-500 font-medium">Loading notifications...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center shadow-sm">
                        <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-red-700 mb-2">Notice</h3>
                        <p className="text-red-600">{error}</p>
                        <button
                            onClick={fetchNotifications}
                            className="mt-4 px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-semibold transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                ) : notifications.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-xl p-10 text-center shadow-sm">
                        <Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No active notifications</h3>
                        <p className="text-slate-500">Check back later for exam updates and schedules.</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {notifications.map((notif) => (
                            <div
                                key={notif._id}
                                className="group flex flex-col sm:flex-row bg-white rounded-xl shadow-md border-2 border-slate-200/80 overflow-hidden text-left hover:shadow-lg transition-all duration-300"
                            >
                                {/* Left Color Strip */}
                                <div className="w-full sm:w-1.5 h-1.5 sm:h-auto bg-orange-400 group-hover:bg-orange-500 transition-colors" />

                                <div className="flex-1 p-5 sm:p-6">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                <span className="bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-md">
                                                    {notif.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {formatDate(notif.createdAt)}
                                                </span>
                                            </div>

                                            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                                                {notif.title}
                                            </h2>

                                            {notif.message && (
                                                <p className="text-slate-600 text-sm leading-relaxed mt-1">
                                                    {notif.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-row sm:flex-col gap-2 shrink-0 pt-2 sm:pt-0">
                                            {notif.fileUrl && (
                                                <a
                                                    href={notif.fileUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-lg text-sm font-semibold transition-colors"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    Attachment
                                                </a>
                                            )}
                                            {notif.url && (
                                                <a
                                                    href={notif.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-sm font-semibold transition-colors"
                                                >
                                                    <LinkIcon className="w-4 h-4" />
                                                    External Link
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
