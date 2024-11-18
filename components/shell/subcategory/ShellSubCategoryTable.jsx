"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import Link from 'next/link';
import React, { useState } from 'react'

function ShellSubCategoryTable({ subcategories, companySlug, category }) {
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
                                <Link className='btn supplier-btn btn-sm' href={`/company/${companySlug}/shell/${category?.slug}/${subcategory?.slug}`}>
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

export default ShellSubCategoryTable