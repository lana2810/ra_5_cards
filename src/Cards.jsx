/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Cards({ srsImage, cardTitle, hrefTitle, href, children }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {srsImage && <img src={srsImage} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        {children}
        <a href={href} className="btn btn-primary">
          {hrefTitle}
        </a>
      </div>
    </div>
  );
}

export default Cards;
