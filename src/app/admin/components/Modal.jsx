"use client";

import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ title, children, onClose }) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div 
                className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" 
                onClick={onClose}
            ></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-neutral-200">
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                    <h2 className="text-xl font-bold tracking-tight text-neutral-800">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="px-6 py-6 overflow-y-auto hidden-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
}
