import Link from "next/link";
import React, { useState } from "react";

function SubContractorTable({ subcontractors }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead className="table-info">
            <tr>
              <th>#</th>
              <th>Info</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {subcontractors?.map((subcontractor, index) => (
              <tr key={subcontractor?.reference}>
                <td>{index + 1}</td>
                <td>{subcontractor?.email}</td>
                {/* <td className="d-flex gap-2 justify-content-start">
                  <Link
                    href={`/contractor/subcontractors/${subcontractor?.slug}`}
                    className="btn btn-outline-info btn-sm"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SubContractorTable;
