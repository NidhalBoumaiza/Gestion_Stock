import React from "react";
import Navbar from "./Navbar";

const ListCommandes = () => {
  return (
    <div className="bg-light min-vh-100 h-100">
      <Navbar />
      <div className="container mt-4">
        <div className="border-bottom">
          <h3 className="fw-light" style={{ letterSpacing: "1px" }}>
            Liste des ventes:
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ListCommandes;
