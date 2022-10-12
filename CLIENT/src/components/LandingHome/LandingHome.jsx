import React from "react";
import Footer from "../Footer/Footer";
export default function LandingHome() {
  return (
    <div>
      <div className="container">
        <h1 className="">Welcome to Express Clothes</h1>
        <h4>Buy or increase your store selling Clothes</h4>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button className="btn btn-warning me-md-2 btn-lg">
            Enter to Shop
          </button>
          <button className="btn btn-warning me-md-2 btn-lg">
            Create a Store
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
