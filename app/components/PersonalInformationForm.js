import { useState } from "react";

export default function PersonalInformationForm({ formData, handleChange, inputStyle }) {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (["firstName", "middleName", "lastName", "university"].includes(name)) {
      // No special characters validation
      if (/[^a-zA-Z0-9\s]/.test(value)) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} cannot contain special characters.`;
      }
    } else if (name === "phone") {
      // Check if the input contains only numbers
      if (value && !/^\d+$/.test(value)) {
        error = "Phone number must contain only numbers.";
      }
    } else if (name === "email") {
      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value && !emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "linkedin") {
      // Validate LinkedIn URL format
      const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
      if (value && !linkedinRegex.test(value)) {
        error = "Please enter a valid LinkedIn profile URL.";
      }
    } else if (name === "portfolio") {
      // Validate portfolio URL format
      const urlRegex = /^(https?):\/\/[^\s$.?#].[^\s]*$/;
      if (value && !urlRegex.test(value)) {
        error = "Please enter a valid portfolio URL.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(e); // Update form data
    validateField(name, value); // Validate specific field
  };

  return (
    <div>
      <h3>Personal Information</h3>

      {/* First Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="firstName" style={{ display: "block", marginBottom: ".5rem" }}>First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Please enter your first name"
          required
          maxLength={40}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.firstName.length}/40 characters
          </p>
        {errors.firstName && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.firstName}</p>}
      </div>

      {/* Middle Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="middleName" style={{ display: "block", marginBottom: ".5rem" }}>Middle Name (if any)</label>
        <input
          type="text"
          name="middleName"
          id="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
          placeholder="Please enter your middle name"
          maxLength={40}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.middleName.length}/40 characters
          </p>
        {errors.middleName && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.middleName}</p>}
      </div>

      {/* Last Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="lastName" style={{ display: "block", marginBottom: ".5rem" }}>Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Please enter your last name"
          required
          maxLength={40}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.lastName.length}/40 characters
          </p>
        {errors.lastName && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.lastName}</p>}
      </div>

      {/* Phone Number */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="phone" style={{ display: "block", marginBottom: ".5rem" }}>Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="e.g., 1234567890"
          required
          maxLength={15}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.phone.length}/15 characters
          </p>
        {errors.phone && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.phone}</p>}
      </div>
        {/* email */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: ".5rem" }}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="e.g., example@domain.com"
          required
          maxLength={100}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.email.length}/100 characters
          </p>
        {errors.email && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.email}</p>}
      </div>

      {/* University */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="university" style={{ display: "block", marginBottom: ".5rem" }}>University</label>
        <input
          type="text"
          name="university"
          id="university"
          value={formData.university}
          onChange={handleInputChange}
          placeholder="Please enter your university"
          required
          maxLength={100}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.university.length}/100 characters
          </p>
        {errors.university && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.university}</p>}
      </div>

      {/* LinkedIn Profile */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="linkedin" style={{ display: "block", marginBottom: ".5rem" }}>LinkedIn Profile</label>
        <input
          type="url"
          name="linkedin"
          id="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          placeholder="https://linkedin.com/in/username"
          maxLength={100}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.linkedin.length}/100 characters
          </p>
        {errors.linkedin && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.linkedin}</p>}
      </div>

      {/* Portfolio */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="portfolio" style={{ display: "block", marginBottom: ".5rem" }}>Portfolio (if any)</label>
        <input
          type="url"
          name="portfolio"
          id="portfolio"
          value={formData.portfolio}
          onChange={handleInputChange}
          placeholder="https://your-portfolio.com"
          maxLength={100}
          style={inputStyle}
        />
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.portfolio.length}/100 characters
          </p>
        {errors.portfolio && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.portfolio}</p>}
      </div>
    </div>
  );
}
