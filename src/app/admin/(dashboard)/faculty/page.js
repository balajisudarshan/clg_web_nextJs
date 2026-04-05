"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import DataTable from '../../components/DataTable';
import Modal from '../../components/Modal';
import { UsersRound, Plus, Loader2, Search, Filter } from 'lucide-react';

export default function FacultyManagement() {
    const [faculties, setFaculties] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFaculty, setEditingFaculty] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    // Search & Filter State
    const [searchQuery, setSearchQuery] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        departmentId: '',
        designation: '',
        qualification: '',
        email: '',
        phone: '',
        doj: '',
        profile_link: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchFaculties();
    }, []);

    const fetchFaculties = async () => {
        setIsFetching(true);
        try {
            const res = await api('faculties');
            setFaculties(res.data || []);
        } catch (error) {
            console.error("Failed to fetch faculties:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleOpenModal = (faculty = null) => {
        if (faculty) {
            setEditingFaculty(faculty);
            setFormData({
                name: faculty.name || '',
                departmentId: faculty.departmentId || '',
                designation: faculty.designation || '',
                qualification: faculty.qualification || '',
                email: faculty.email || '',
                phone: faculty.phone || '',
                doj: faculty.doj || '',
                profile_link: faculty.profile_link || ''
            });
        } else {
            setEditingFaculty(null);
            setFormData({
                name: '', departmentId: '', designation: '', qualification: '', email: '', phone: '', doj: '', profile_link: ''
            });
        }
        setSelectedFile(null);
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Using FormData exactly as required by the backend API
            const payload = new FormData();
            Object.keys(formData).forEach(key => {
                if (formData[key]) payload.append(key, formData[key]);
            });
            if (selectedFile) {
                payload.append('image', selectedFile);
            }

            if (editingFaculty) {
                await api(`faculties/${editingFaculty._id}`, {
                    method: 'PUT',
                    body: payload
                });
            } else {
                await api('faculties', {
                    method: 'POST',
                    body: payload
                });
            }

            await fetchFaculties();
            setIsModalOpen(false);
        } catch (error) {
            alert(error.message || "An error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (faculty) => {
        if (!confirm(`Are you sure you want to permanently remove ${faculty.name}?`)) return;
        
        try {
            await api(`faculties/${faculty._id}`, { method: 'DELETE' });
            await fetchFaculties();
        } catch (error) {
            alert(error.message || "Failed to delete faculty.");
        }
    };

    const uniqueDepartments = [...new Set(faculties.map(f => f.departmentId).filter(Boolean))];

    const filteredFaculties = faculties.filter(faculty => {
        const matchesSearch = (
            faculty.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faculty.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faculty.designation?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        const matchesDepartment = departmentFilter ? faculty.departmentId === departmentFilter : true;
        
        return matchesSearch && matchesDepartment;
    });

    const columns = [
        { 
            header: 'Profile', 
            render: (row) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200">
                        {row.image ? (
                            <img src={row.image} alt={row.name} className="h-full w-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-400 font-bold">
                                {row.name.charAt(0)}
                            </div>
                        )}
                    </div>
                </div>
            )
        },
        { 
            header: 'Identity', 
            render: (row) => (
                <div>
                    <div className="font-bold text-neutral-800">
                        {row.profile_link ? (
                            <a href={row.profile_link} target="_blank" rel="noopener noreferrer" className="hover:text-[#E29820] hover:underline">
                                {row.name}
                            </a>
                        ) : (
                            row.name
                        )}
                    </div>
                    <div className="text-xs text-neutral-500">{row.email || 'No email provided'}</div>
                </div>
            )
        },
        { header: 'Designation', accessor: 'designation' },
        { 
            header: 'Dept ID', 
            render: (row) => (
                <span className="bg-[#E29820]/10 text-[#E29820] font-bold px-2 py-1 rounded-md text-xs">
                    {row.departmentId}
                </span>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <div>
                    <h2 className="text-2xl font-extrabold text-neutral-800 tracking-tight flex items-center">
                        <UsersRound className="w-6 h-6 mr-3 text-[#E29820]" />
                        Faculty Registry
                    </h2>
                    <p className="text-neutral-500 mt-1 text-sm">Manage teaching staff profiles and department assignments.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-[#E29820] hover:bg-[#d48a1c] text-white px-5 py-2.5 rounded-xl font-bold flex items-center shadow-sm shadow-[#E29820]/20 transition-all hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    New Faculty
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search faculty by name, email, or designation..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none transition-all shadow-sm"
                    />
                </div>
                <div className="md:w-64 relative shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Filter className="h-5 w-5 text-neutral-400" />
                    </div>
                    <select
                        value={departmentFilter}
                        onChange={(e) => setDepartmentFilter(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none transition-all appearance-none cursor-pointer"
                    >
                        <option value="">All Departments</option>
                        {uniqueDepartments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
            </div>

            {isFetching ? (
                <div className="flex justify-center p-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#E29820]" />
                </div>
            ) : (
                <DataTable 
                    columns={columns}
                    data={filteredFaculties}
                    onEdit={handleOpenModal}
                    onDelete={handleDelete}
                />
            )}

            {isModalOpen && (
                <Modal title={editingFaculty ? "Edit Faculty Profile" : "Register New Faculty"} onClose={() => setIsModalOpen(false)}>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Department ID *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.departmentId}
                                    onChange={(e) => setFormData({...formData, departmentId: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Designation</label>
                                <input
                                    type="text"
                                    value={formData.designation}
                                    onChange={(e) => setFormData({...formData, designation: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                    placeholder="e.g. Professor & Head"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Qualification</label>
                                <input
                                    type="text"
                                    value={formData.qualification}
                                    onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Profile Link</label>
                                <input
                                    type="url"
                                    value={formData.profile_link}
                                    onChange={(e) => setFormData({...formData, profile_link: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#E29820] focus:border-[#E29820] outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Profile Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                    className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E29820]/10 file:text-[#E29820] hover:file:bg-[#E29820]/20 text-neutral-500"
                                />
                                {editingFaculty && editingFaculty.image && !selectedFile && (
                                    <p className="mt-2 text-xs text-neutral-500">Current image is active. Upload a new one to replace it.</p>
                                )}
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
                                {editingFaculty ? 'Save Changes' : 'Create Profile'}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
}
