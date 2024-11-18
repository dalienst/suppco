import Link from "next/link";
import React from "react";

function BranchTable({ branches, refetch }) {
    return (
        <div className="table-responsive">
            <table className="table-hover table">
                <thead className="table-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {branches?.map((branch, index) => (
                        <tr key={branch?.reference}>
                            <th scope="row">{index + 1}</th>
                            <td>{branch.name}</td>
                            <td>{branch.email}</td>
                            <td>{branch.location}</td>
                            <td>
                                <Link
                                    href="#"
                                    className="btn btn-sm supplier-btn"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BranchTable;