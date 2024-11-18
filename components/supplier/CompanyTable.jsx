import Link from "next/link";
import React from "react";

function CompanyTable({ companies, refetch }) {
  return (
    <div className="table-responsive">
      <table className="table-hover table">
        <thead className="table-success">
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
  );
}

export default CompanyTable;
