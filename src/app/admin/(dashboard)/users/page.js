"use client";

import { useState } from 'react';
import { api } from '@/lib/api';
import DataTable from '../../components/DataTable';
import { ShieldAlert, UserPlus, Loader2 } from 'lucide-react';

export default function RegisterUsersPage() {
    const [formData, setFormData] = useState({ username: '', password: '', role: 'examcell' });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    // Assuming we want visual confirmation without exposing actual users, 
    // we'll mock a short list of registered roles for UI consistency.
    // The backend API doesn't seem to expose a GET /auth/users routine in the docs.
    const mockSecurityLogs = [
        { id: 1, action: "System Initialized", role: "admin", timestamp: "Core System" }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ text: '', type: '' });

        try {
            await api('auth/register', {
                method: 'POST',
                body: formData
            });

            setMessage({ text: 'User successfully registered to the security registry.', type: 'success' });
            setFormData({ username: '', password: '', role: 'examcell' });
        } catch (error) {
            setMessage({ text: error.message || 'Failed to register user.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <div>
                    <h2 className="text-2xl font-extrabold text-neutral-800 tracking-tight flex items-center">
                        <ShieldAlert className="w-6 h-6 mr-3 text-[#E29820]" />
                        Security & User Registry
                    </h2>
                    <p className="text-neutral-500 mt-1 text-sm">Issue credentials for new admin or examcell personnel.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Registration Form */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="bg-[#E29820]/5 px-6 py-4 border-b border-neutral-100">
                        <h3 className="font-bold text-neutral-800 flex items-center">
                            <UserPlus className="w-4 h-4 mr-2 text-[#E29820]" /> 
                            New Credential
                        </h3>
                    </div>
                    <div className="p-6">
                        {message.text && (
                            <div className={`p-4 rounded-xl mb-6 text-sm font-medium border ${
                                message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                            }`}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Username</label>
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                                    required
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none transition-all"
                                    placeholder="e.g. examcell_2026"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Temporary Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Assigned Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none transition-all uppercase text-sm font-bold text-neutral-700"
                                >
                                    <option value="examcell">EXAMCELL (Restricted)</option>
                                    <option value="admin">ADMIN (Unrestricted)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-6 bg-[#E29820] hover:bg-[#d48a1c] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm disabled:opacity-70 flex items-center justify-center"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Provision Access'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Audit Logs / Directory */}
                <div className="lg:col-span-2">
                    <DataTable 
                        columns={[
                            { header: 'Action', accessor: 'action' },
                            { 
                                header: 'Role Scope', 
                                render: (row) => (
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        row.role === 'admin' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                        {row.role}
                                    </span>
                                )
                            },
                            { header: 'Origin', accessor: 'timestamp' },
                        ]}
                        data={mockSecurityLogs}
                    />
                </div>

            </div>
        </div>
    );
}
