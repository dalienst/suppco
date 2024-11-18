"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function ElectricityItemTable({ items, companySlug, subCategory, categorySlug }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState({});

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
                                <Link className='btn supplier-btn btn-sm' href={`/company/${companySlug}/electric/${categorySlug}/${subCategory?.slug}/${item?.slug}`}>
                                    <i className='bi bi-pencil-square'></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ElectricityItemTable