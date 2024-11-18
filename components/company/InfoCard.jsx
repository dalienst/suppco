import React from "react";

function InfoCard({ title, subtitle }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
      </div>
    </div>
  );
}

export default InfoCard;
