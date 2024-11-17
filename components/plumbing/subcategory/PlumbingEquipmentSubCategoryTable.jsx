"use client";
import React from 'react'

function PlumbingEquipmentSubCategoryTable({ plumbing }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {plumbing?.map((plumbing, index) => (
                        <tr key={plumbing?.reference}>
                            <td scope="row">{index + 1}</td>
                            <td>{plumbing?.source_location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlumbingEquipmentSubCategoryTable