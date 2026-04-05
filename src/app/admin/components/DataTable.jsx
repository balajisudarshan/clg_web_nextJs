"use client";

import { Edit, Trash2 } from 'lucide-react';

export default function DataTable({ columns, data, onEdit, onDelete }) {
    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-12 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 tracking-tight">No records found</h3>
                <p className="text-neutral-500 mt-1">There is no data to display matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-[#E29820]/5 text-neutral-700 uppercase text-xs font-bold tracking-wider border-b border-neutral-200">
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} className="px-6 py-4 whitespace-nowrap">
                                    {col.header}
                                </th>
                            ))}
                            {(onEdit || onDelete) && (
                                <th className="px-6 py-4 text-right whitespace-nowrap">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-neutral-50/80 transition-colors">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4 text-neutral-600 font-medium">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                                {(onEdit || onDelete) && (
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            {onEdit && (
                                                <button
                                                    onClick={() => onEdit(row)}
                                                    className="p-2 text-neutral-400 hover:text-[#E29820] hover:bg-[#E29820]/10 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button
                                                    onClick={() => onDelete(row)}
                                                    className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
