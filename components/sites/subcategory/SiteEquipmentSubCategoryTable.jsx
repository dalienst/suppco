"use client"
import React from 'react'

function SiteEquipmentSubCategoryTable({ sites }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {sites?.map((site, index) => (
                        <tr key={site?.reference}>
                            <td scope="row">{index + 1}</td>
                            <td>{site?.product_name}</td>
                            <td>{site?.source_location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SiteEquipmentSubCategoryTable