"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { ShieldAlert, LogIn, Loader2 } from 'lucide-react';

export default function AdminLogin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const data = await api('auth/login', {
                method: 'POST',
                body: credentials
            });

            if (data.token) {
                // Decode token to find role
                const payload = JSON.parse(atob(data.token.split('.')[1]));
                const extractedRole = data.role || data.user?.role || payload.role || 'admin';
                localStorage.setItem('token', data.token);
                localStorage.setItem('userRole', extractedRole);
                router.push('/admin');
            } else {
                throw new Error("Missing token in response.");
            }
        } catch (err) {
            setError(err.message || "Invalid credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4" style={{ 
            backgroundImage: "radial-gradient(circle at top right, rgba(226,152,32,0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(226,152,32,0.05), transparent 40%)" 
        }}>
            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-[#E29820] shadow-[0_0_40px_rgba(226,152,32,0.3)] mb-6 ring-4 ring-[#E29820]/20">
                        <ShieldAlert className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Admin Gateway</h1>
                    <p className="text-neutral-400 mt-3 font-medium">Secure access to NBKRIST systems.</p>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E29820] to-transparent"></div>
                    
                    {error && (
                        <div className="mb-6 p-4 rounded-xl text-sm flex items-center bg-red-500/10 text-red-400 border border-red-500/20">
                            <div className="w-2 h-2 rounded-full mr-3 bg-red-500 shrink-0"></div>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6 flex flex-col">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-neutral-300">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                className="w-full px-4 py-3.5 bg-neutral-950/50 border border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E29820] text-white transition-all font-medium placeholder-neutral-600"
                                placeholder="Enter admin username"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-neutral-300">Password</label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                className="w-full px-4 py-3.5 bg-neutral-950/50 border border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E29820] text-white transition-all font-medium placeholder-neutral-600"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center py-4 px-4 rounded-xl text-black font-bold mt-8 bg-[#E29820] hover:bg-[#d48a1c] focus:outline-none focus:ring-2 focus:ring-[#E29820] focus:ring-offset-2 focus:ring-offset-neutral-900 shadow-[0_0_20px_rgba(226,152,32,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group text-lg"
                        >
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <LogIn className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                                    Sign In securely
                                </>
                            )}
                        </button>
                    </form>
                </div>
                
                <p className="text-center text-neutral-500 text-sm mt-8 font-medium">
                    &copy; {new Date().getFullYear()} NBKRIST. All rights reserved.
                </p>
            </div>
        </div>
    );
}
