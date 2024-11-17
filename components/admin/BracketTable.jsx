"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { deleteBracket } from '@/services/category';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function BracketTable({ brackets, refetchItems }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState({});

    const handleDelete = async (slug) => {
        setLoading((prev) => ({ ...prev, [slug]: true }));
        try {
            await deleteBracket(slug, axios);
            toast.success("Bracket deleted successfully. Refreshing...");
            refetchItems();
        } catch (error) {
            toast.error("Failed to delete Bracket");
        } finally {
            setLoading((prev) => ({ ...prev, [slug]: false }));
        }
    }
    return (
        <>
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
                        {brackets?.map((bracket, index) => (
                            <tr key={bracket?.reference}>
                                <td scope='row'>{index + 1}</td>
                                <td>{bracket?.name}</td>
                                <td className='d-flex gap-2 justify-content-start'>

                                    <button onClick={() => handleDelete(bracket?.slug)} disabled={loading[bracket?.slug]} className='btn btn-sm btn-outline-danger'>
                                        {loading[bracket?.slug] ? (
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
        </>
    )
}

export default BracketTable