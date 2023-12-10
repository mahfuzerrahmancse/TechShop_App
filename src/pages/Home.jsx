import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const navigate = useNavigate();
  const { setUserDataContext } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);

    // Set user data in the context
    setUserDataContext(formData);

    // Navigate to the "About" page
    navigate("/about");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-bold">User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

