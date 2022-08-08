import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getAll } from "../Api";
const ListStock = () => {
  const [state, setState] = useState(null);

  const getResponses = async () => {
    try {
      const { data } = await getAll();
      setState(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getResponses();
  });
  return (
    <div className="bg-light min-vh-100 h-100">
      <Navbar />
      <div className="container mt-4">
        <div className="border-bottom">
          <h3 className="fw-light" style={{ letterSpacing: "1px" }}>
            Stock:
          </h3>
        </div>
        {state.map((el) => {
          return <h1>{el.Name}</h1>;
        })}
      </div>
    </div>
  );
};

export default ListStock;
