import Link from "next/link";
import React from "react";

function ContractorCompanyTable({ companies }) {
    return (
        <div className="table-responsive">
            <table className="table-hover table">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies?.map((company, index) => (
                        <tr key={company?.reference}>
                            <th scope="row">{index + 1}</th>
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>{company.currency}</td>
                            <td>
                                <Link
                                    href={`/company/${company.slug}`}
                                    className="btn btn-sm contractor-btn"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContractorCompanyTable;
