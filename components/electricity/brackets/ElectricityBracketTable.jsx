"use client"
import useAxiosAuth from '@/hooks/useAxiosAuth';
import Link from 'next/link';
import React, { useState } from 'react'

function ElectricityBracketTable({ brackets, companySlug, subCategorySlug, categorySlug, itemSlug }) {
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
                    {brackets?.map((bracket, index) => (
                        <tr key={bracket?.reference}>
                            <td scope='row'>{index + 1}</td>
                            <td>{bracket?.name}</td>
                            <td className='d-flex gap-2 justify-content-start'>

                                <Link className='btn supplier-btn btn-sm' href={`/company/${companySlug}/electric/${categorySlug}/${subCategorySlug}/${itemSlug}/${bracket?.slug}`}>
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

export default ElectricityBracketTable