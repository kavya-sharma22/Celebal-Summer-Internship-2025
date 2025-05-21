import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    countryCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First Name is required";
      case "lastName":
        return value.trim() ? "" : "Last Name is required";
      case "username":
        return value.trim() ? "" : "Username is required";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Email is invalid";
      case "password":
        return value ? "" : "Password is required";
      case "phoneNumber":
        return /^\d{10}$/.test(value) ? "" : "Enter 10 digit number";
      case "country":
        return value ? "" : "Country is required";
      case "city":
        return value ? "" : "City is required";
      case "panNo":
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? "" : "Invalid PAN No";
      case "aadharNo":
        return /^\d{12}$/.test(value) ? "" : "Invalid Aadhar No";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Validate field immediately on change
    const error = validateField(name, type === "checkbox" ? checked : value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validate = () => {
    const newErrors = {};
    for (const field in formData) {
      if (field !== "showPassword" && field !== "countryCode") {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/display", { state: formData });
    }
  };

  const cityOptions = {
    India: ["Mumbai", "Delhi", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
  };

  // Disable submit if any error or any required field empty
  const isSubmitDisabled =
    Object.values(errors).some((err) => err) ||
    !formData.firstName ||
    !formData.lastName ||
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.phoneNumber ||
    !formData.country ||
    !formData.city ||
    !formData.panNo ||
    !formData.aadharNo;

  return (
    <form onSubmit={handleSubmit} noValidate className="form-container">
      <h2>User Form</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className={errors.firstName ? "error-input" : ""}
      />
      <p>{errors.firstName}</p>

      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className={errors.lastName ? "error-input" : ""}
      />
      <p>{errors.lastName}</p>

      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className={errors.username ? "error-input" : ""}
      />
      <p>{errors.username}</p>

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={errors.email ? "error-input" : ""}
      />
      <p>{errors.email}</p>

      <input
        name="password"
        type={formData.showPassword ? "text" : "password"}
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={errors.password ? "error-input" : ""}
      />
     <div className="checkbox-container">
  <input
    type="checkbox"
    id="showPassword"
    name="showPassword"
    checked={formData.showPassword}
    onChange={handleChange}
  />
  <label htmlFor="showPassword">Show Password</label>
</div>

      <p>{errors.password}</p>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          name="countryCode"
          value={formData.countryCode}
          readOnly
          style={{ width: "60px" }}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={errors.phoneNumber ? "error-input" : ""}
          style={{ flex: 1 }}
        />
      </div>
      <p>{errors.phoneNumber}</p>

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className={errors.country ? "error-input" : ""}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      <p>{errors.country}</p>

      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
        className={errors.city ? "error-input" : ""}
      >
        <option value="">Select City</option>
        {cityOptions[formData.country]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>{errors.city}</p>

      <input
        name="panNo"
        placeholder="PAN No."
        value={formData.panNo}
        onChange={handleChange}
        className={errors.panNo ? "error-input" : ""}
      />
      <p>{errors.panNo}</p>

      <input
        name="aadharNo"
        placeholder="Aadhar No."
        value={formData.aadharNo}
        onChange={handleChange}
        className={errors.aadharNo ? "error-input" : ""}
      />
      <p>{errors.aadharNo}</p>

      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
