import Link from "next/link";
import React, { useState } from "react";

function EmployeesTable({ employees }) {
  const [loading, isLoading] = useState(false);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>Info</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, index) => (
            <tr key={employee?.reference}>
              <td>{index + 1}</td>
              <td>{employee?.email}</td>
              <td>
                {employee?.is_admin === true ? (
                  <span className="badge bg-success">Admin</span>
                ) : (
                  <span className="badge bg-primary">Employee</span>
                )}
              </td>
              <td className="d-flex gap-2 justify-content-start">
                <Link
                  href={`/supplier/employees/${employee?.slug}`}
                  className="btn btn-outline-success btn-sm"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesTable;
