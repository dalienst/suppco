"use client";
import capitalizeFirstLetter from '@/hooks/capitalizeFirstLetter';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { deleteCategory } from '@/services/category';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function CategoryTable({ categories, refetchCategory }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState({});

    const handleDelete = async (slug) => {
        setLoading((prev) => ({ ...prev, [slug]: true }));
        try {
            await deleteCategory(slug, axios);
            toast.success("Category deleted successfully. Refreshing...");
            refetchCategory();
        } catch (error) {
            toast.error("Failed to delete category");
        } finally {
            setLoading((prev) => ({ ...prev, [slug]: false }));
        }
    }
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Inventory</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map((category, index) => (
                        <tr key={category?.reference}>
                            <td scope="row">{index + 1}</td>
                            <td>{category?.name}</td>
                            <td>{capitalizeFirstLetter(category?.inventory)}</td>
                            <td className='d-flex gap-2 justify-content-start'>
                                <Link className='btn contractor-btn btn-sm' href={`/admin/categories/${category?.slug}`}>
                                    <i className='bi bi-pencil-square'></i>
                                </Link>
                                <button onClick={() => handleDelete(category?.slug)} disabled={loading[category?.slug]} className='btn btn-sm btn-outline-danger'>
                                    {loading[category?.slug] ? (
                                        <div
                                            className="spinner-border spinner-border-sm text-danger"
                                            role="status"
                                        >
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (

                                        <i className='bi bi-trash-fill'></i>
                                    )}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTable