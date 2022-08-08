import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faCubesStacked,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="bg-light min-vh-100 h-100">
      <Navbar />
      <div className="container mt-4">
        <div className="border-bottom">
          <h3 className="fw-light" style={{ letterSpacing: "1px" }}>
            Home (Statistique):
          </h3>
        </div>
        <div className="mt-3 row justify-content-evenly">
          <div className="container">
            <div className="col-lg-3 col-md-6 col-sm-12 rounded-3 p-4 bg-dark mt-2 text-white">
              <div className="d-flex justify-content-between">
                <h6 className="text-white">Produits En Stock</h6>
                <FontAwesomeIcon
                  icon={faCubes}
                  style={{ marginTop: "2px", fontSize: "20px" }}
                />
              </div>
              <h4 style={{ letterSpacing: "1px" }} className="text-white">
                129
              </h4>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 rounded-3 p-4 bg-dark mt-2 text-white">
              <div className="d-flex justify-content-between">
                <h6 className="text-white">Produits en repture du stock</h6>
                <FontAwesomeIcon
                  icon={faCubesStacked}
                  style={{ marginTop: "2px", fontSize: "20px" }}
                />
              </div>
              <h4 style={{ letterSpacing: "1px" }} className="text-white">
                4
              </h4>
            </div>

            <div className="col-lg-3  col-md-6 col-sm-12 rounded-3 p-4 bg-dark mt-2 text-white">
              <div className="d-flex justify-content-between">
                <h6 className="text-white">Ventes Total</h6>
                <FontAwesomeIcon
                  icon={faSackDollar}
                  style={{ marginTop: "2px", fontSize: "20px" }}
                />
              </div>
              <h4 style={{ letterSpacing: "1px" }} className="text-white">
                921
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
