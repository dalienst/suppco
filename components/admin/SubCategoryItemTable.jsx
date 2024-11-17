"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { deleteSubCategoryItem } from '@/services/category';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function SubCategoryItemTable({ items, refetchSubCategory, subCategory, categorySlug }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState({});

    const handleDelete = async (slug) => {
        setLoading((prev) => ({ ...prev, [slug]: true }));
        try {
            await deleteSubCategoryItem(slug, axios);
            toast.success("Item deleted successfully. Refreshing...");
            refetchSubCategory();
        } catch (error) {
            toast.error("Failed to delete Item");
        } finally {
            setLoading((prev) => ({ ...prev, [slug]: false }));
        }
    }
    return (
        <div className='table-responsive'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item, index) => (
                        <tr key={item?.reference}>
                            <td scope='row'>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td className='d-flex gap-2 justify-content-start'>
                                <Link className='btn contractor-btn btn-sm' href={`/admin/categories/${categorySlug}/${subCategory?.slug}/items/${item?.slug}`}>
                                    <i className='bi bi-pencil-square'></i>
                                </Link>
                                <button onClick={() => handleDelete(item?.slug)} disabled={loading[item?.slug]} className='btn btn-sm btn-outline-danger'>
                                    {loading[item?.slug] ? (
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

export default SubCategoryItemTable