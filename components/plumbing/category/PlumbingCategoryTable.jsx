"use client"
import capitalizeFirstLetter from '@/hooks/capitalizeFirstLetter';
import useAxiosAuth from '@/hooks/useAxiosAuth'
import Link from 'next/link';
import React, { useState } from 'react'

function PlumbingCategoryTable({ categories, companySlug }) {
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
                                <Link className='btn supplier-btn btn-sm' href={`/company/${companySlug}/plumb/${category?.slug}`}>
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

export default PlumbingCategoryTable