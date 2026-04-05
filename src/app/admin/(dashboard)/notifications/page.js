"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import DataTable from '../../components/DataTable';
import Modal from '../../components/Modal';
import { BellRing, Plus, Loader2, Link as LinkIcon, FileText } from 'lucide-react';

export default function NotificationsManagement() {
    const [notifications, setNotifications] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNotif, setEditingNotif] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    
    // Auth Role context
    const [role, setRole] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        type: 'exam',
        message: '',
        url: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        setRole(storedRole);
        fetchNotifications(storedRole);
    }, []);

    const fetchNotifications = async (currentRole) => {
        setIsFetching(true);
        try {
            // Examcell only queries exam notifications. Admin queries all.
            const query = currentRole === 'examcell' ? '?type=exam' : '';
            const res = await api(`notifications${query}`);
            
            // Render array might be directly the response or wrapped in .data depending on backend logic 
            const data = Array.isArray(res) ? res : (res.data || []);
            setNotifications(data);
        } catch (error) {
            console.error("Failed to fetch notifications:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleOpenModal = (notif = null) => {
        if (notif) {
            // Prevent examcell from editing general notifications just in case
            if (role === 'examcell' && notif.type !== 'exam') {
                alert("You are restricted from modifying general announcements.");
                return;
            }
            
            setEditingNotif(notif);
            setFormData({
                title: notif.title || '',
                type: notif.type || 'exam',
                message: notif.message || '',
                url: notif.url || ''
            });
        } else {
            setEditingNotif(null);
            setFormData({
                title: '', type: role === 'examcell' ? 'exam' : 'general', message: '', url: ''
            });
        }
        setSelectedFile(null);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Final security check
        if (role === 'examcell' && formData.type !== 'exam') {
            alert("Security Error: Examcell role can only publish 'exam' type notifications.");
            return;
        }

        setIsLoading(true);

        try {
            const payload = new FormData();
            Object.keys(formData).forEach(key => {
                if (formData[key]) payload.append(key, formData[key]);
            });
            if (selectedFile) {
                payload.append('file', selectedFile);
            }

            if (editingNotif) {
                await api(`notifications/${editingNotif._id}`, {
                    method: 'PUT',
                    body: payload
                });
            } else {
                await api('notifications', {
                    method: 'POST',
                    body: payload
                });
            }

            await fetchNotifications(role);
            setIsModalOpen(false);
        } catch (error) {
            alert(error.message || "An error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (notif) => {
        if (role === 'examcell' && notif.type !== 'exam') {
            alert("Security Error: You are restricted from deleting general announcements.");
            return;
        }

        if (!confirm(`Are you sure you want to permanently remove this notification?`)) return;
        
        try {
            await api(`notifications/${notif._id}`, { method: 'DELETE' });
            await fetchNotifications(role);
        } catch (error) {
            alert(error.message || "Failed to delete notification.");
        }
    };

    const columns = [
        { 
            header: 'Notification Details', 
            render: (row) => (
                <div className="max-w-md">
                    <div className="font-bold text-neutral-800 text-base">{row.title}</div>
                    {row.message && <div className="text-sm text-neutral-500 mt-1 truncate">{row.message}</div>}
                    
                    <div className="flex gap-3 mt-2">
                        {row.url && (
                            <a href={row.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded">
                                <LinkIcon size={12} className="mr-1" /> External Link
                            </a>
                        )}
                        {row.fileUrl && (
                            <a href={row.fileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-[#E29820] hover:bg-[#E29820]/20 bg-[#E29820]/10 px-2 py-1 rounded transition-colors">
                                <FileText size={12} className="mr-1" /> Attachment
                            </a>
                        )}
                    </div>
                </div>
            )
        },
        { 
            header: 'Scope', 
            render: (row) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    row.type === 'exam' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                    {row.type}
                </span>
            )
        },
        { 
            header: 'Publisher', 
            render: (row) => (
                <div className="text-xs font-semibold text-neutral-600">
                    {row.createdBy?.username || 'Legacy System'}
                </div>
            )
        }
    ];

    if (!role) return null;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <div>
                    <h2 className="text-2xl font-extrabold text-neutral-800 tracking-tight flex items-center">
                        <BellRing className="w-6 h-6 mr-3 text-[#E29820]" />
                        Notification Management
                    </h2>
                    <p className="text-neutral-500 mt-1 text-sm">
                        {role === 'admin' 
                            ? "Manage all institution-wide and examination announcements." 
                            : "Restricted View: Manage examination and schedule announcements."}
                    </p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-[#E29820] hover:bg-[#d48a1c] text-white px-5 py-2.5 rounded-xl font-bold flex items-center shadow-sm shadow-[#E29820]/20 transition-all hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    New Alert
                </button>
            </div>

            {isFetching ? (
                <div className="flex justify-center p-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#E29820]" />
                </div>
            ) : (
                <DataTable 
                    columns={columns}
                    data={notifications}
                    onEdit={handleOpenModal}
                    onDelete={handleDelete}
                />
            )}

            {isModalOpen && (
                <Modal title={editingNotif ? "Edit Notification" : "Publish New Notification"} onClose={() => setIsModalOpen(false)}>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Notification Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Notification Scope (Type) *</label>
                                <select
                                    required
                                    disabled={role === 'examcell'}
                                    value={formData.type}
                                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none font-medium disabled:opacity-60 disabled:cursor-not-allowed uppercase text-sm"
                                >
                                    <option value="exam">EXAM (Restricted)</option>
                                    <option value="general">GENERAL ACADEMIC</option>
                                </select>
                                {role === 'examcell' && (
                                    <p className="mt-1.5 text-xs text-red-500 font-medium">Your role restricts you exclusively to 'EXAM' notifications.</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Context / Details (Optional)</label>
                                <textarea
                                    rows="3"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none resize-none"
                                    placeholder="Add additional context for students..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">External URL (Optional)</label>
                                    <input
                                        type="url"
                                        value={formData.url}
                                        onChange={(e) => setFormData({...formData, url: e.target.value})}
                                        className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                        placeholder="https://..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">File Attachment (Optional)</label>
                                    <input
                                        type="file"
                                        onChange={(e) => setSelectedFile(e.target.files[0])}
                                        className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E29820]/10 file:text-[#E29820] hover:file:bg-[#E29820]/20 text-neutral-500"
                                    />
                                    {editingNotif && editingNotif.fileUrl && !selectedFile && (
                                        <p className="mt-2 text-xs text-neutral-500">A file is currently attached. Upload new to replace.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 pt-4 border-t border-neutral-100">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-5 py-2.5 text-neutral-600 font-semibold hover:bg-neutral-100 rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#E29820] hover:bg-[#d48a1c] text-white px-6 py-2.5 rounded-xl font-bold transition-colors disabled:opacity-70 flex items-center"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                                {editingNotif ? 'Save Changes' : 'Publish Now'}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
}
