import Link from 'next/link'
import React from 'react'

function PlantTable({ plants, refetch, companySlug }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plants?.map((plant, index) => (
                        <tr key={plant?.reference}>
                            <th scope="row">{index + 1}</th>
                            <td>{plant.manufacturer}</td>
                            <td>{plant.model}</td>
                            <td>{plant.year}</td>
                            <td>{plant.ratePerHour}</td>
                            <td>
                                <Link
                                    href={`/company/${companySlug}/${plant?.reference}`}
                                    className="btn btn-sm supplier-btn"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlantTable