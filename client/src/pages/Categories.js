import React from "react";
import Layout from "../components/Layout/Layout";
import useCatergory from "../hooks/usecategory";
import { useState, useeffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCatergory();
  return (
    <Layout title={"all Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6">
              <button>
                <Link to="/">{c.name}</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
