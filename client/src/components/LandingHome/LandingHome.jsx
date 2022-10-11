import React from "react";
import { Link } from "react-router-dom";
import "./LandingHome.css";
export default function LandingHome() {
  return (
    <div className="container">
      <div>
        <h1>Welcome to Express Clothes</h1>
        <h4>Buy, Sell, and grow your store</h4>
      </div>
      <div className="d-grid gap-2  d-md-flex justify-content-md-start">
        <Link to="/home">
          <button className="btn btn-primary btn-lg me-md-2">
            Enter to the Shop
          </button>
        </Link>

        <Link to="/register">
          <button className="btn btn-primary btn-lg nme-md-2">
            Start to Sell
          </button>
        </Link>
      </div>
    </div>
  );
}
