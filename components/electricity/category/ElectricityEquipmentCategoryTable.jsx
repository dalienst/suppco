"use client";
import React from 'react';

function ElectricityEquipmentCategoryTable({ electricity }) {
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
                    {electricity?.map((electricity, index) => (
                        <tr key={electricity?.reference}>
                            <td scope="row">{index + 1}</td>
                            <td>{electricity?.source_location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ElectricityEquipmentCategoryTable