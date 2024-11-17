import Link from "next/link";
import React from "react";

function SiteDisplay({ sites }) {
  return (
    <div className="table-responsive">
      <table className="table-hover table">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sites?.map((site, index) => (
            <tr key={site?.reference}>
              <th scope="row">{index + 1}</th>
              <td>{site.name}</td>
              <td>{site.address}</td>
              <td>
                <Link
                  // href={`/sites/${site?.slug}/dashboard`}
                  href="#"
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

export default SiteDisplay;
