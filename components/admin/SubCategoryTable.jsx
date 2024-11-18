"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { deleteSubCategory } from '@/services/category';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function SubCategoryTable({ subcategories, refetchCategory, category }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState({});

    const handleDelete = async (slug) => {
        setLoading((prev) => ({ ...prev, [slug]: true }));
        try {
            await deleteSubCategory(slug, axios);
            toast.success("Sub Category deleted successfully. Refreshing...");
            refetchCategory();
        } catch (error) {
            toast.error("Failed to delete sub category");
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {subcategories?.map((subcategory, index) => (
                        <tr key={subcategory?.reference}>
                            <td scope='row'>{index + 1}</td>
                            <td>{subcategory?.name}</td>
                            <td className='d-flex gap-2 justify-content-start'>
                                <Link className='btn contractor-btn btn-sm' href={`/admin/categories/${category?.slug}/${subcategory?.slug}`}>
                                    <i className='bi bi-pencil-square'></i>
                                </Link>
                                <button onClick={() => handleDelete(subcategory?.slug)} disabled={loading[subcategory?.slug]} className='btn btn-sm btn-outline-danger'>
                                    {loading[subcategory?.slug] ? (
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

export default SubCategoryTable