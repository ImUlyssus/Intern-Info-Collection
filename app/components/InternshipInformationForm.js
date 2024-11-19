function InternshipInformationForm({ formData, errors = {}, handleChange, inputStyle }) {
    // Define the working conditions options and positions
    const workingConditions = [
        "Full time (5 days/week)",
        "Part time (4 days/week)",
        "Part time (3 days/week)",
        "Part time (2 days/week)",
        "Hybrid (1 day WFH)",
        "Hybrid (2 days WFH)",
        "Hybrid (3 days WFH)",
        "Hybrid (4 days WFH)"
    ];

    const positions = [
        "Software Developer",
        "UI/UX Designer",
        "Data Analyst",
        "Marketing Intern",
        "Product Manager",
        "Graphic Designer"
    ];

    // Validate the salary field to ensure it falls within the valid range
    const validateSalary = (value) => {
        let error = "";
        if (value && (value < 5000 || value > 1000000)) {
            error = "Salary must be between 5000 and 1,000,000.";
        }
        return error;
    };

    const handleSalaryChange = (e) => {
        const value = parseInt(e.target.value, 10);
        
        // Only update the value if it's between 5000 and 1000000
        if (value >= 5000 && value <= 1000000) {
            handleChange(e); // Continue with regular form update
            setErrors((prev) => ({ ...prev, salary: "" })); // Clear any previous errors
        } else if (value < 5000) {
            // Prevent entry of values less than 5000
            e.preventDefault();
            setErrors((prev) => ({ ...prev, salary: "Salary must be between 5000 and 1,000,000." }));
        }
    };

    return (
        <div>
            <h3>Internship Information</h3>
            {/* Position Dropdown */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="position">Position</label>
                <select
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        border: errors.position ? "1px solid red" : "1px solid #000",
                    }}
                >
                    <option value="" disabled>Select a position</option>
                    {positions.map((pos, index) => (
                        <option key={index} value={pos}>{pos}</option>
                    ))}
                </select>
                {errors.position && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.position}</p>}
            </div>

            {/* Start Date */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        border: errors.startDate ? "1px solid red" : "1px solid #000",
                    }}
                />
                {errors.startDate && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.startDate}</p>}
            </div>

            {/* End Date */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="endDate">End Date</label>
                <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        border: errors.endDate ? "1px solid red" : "1px solid #000",
                    }}
                />
                {errors.endDate && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.endDate}</p>}
            </div>

            {/* Expected Salary */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="salary">Expected Salary</label>
                <input
                    type="number"
                    name="salary"
                    id="salary"
                    value={formData.salary}
                    onChange={handleSalaryChange} // Use the new handler here
                    style={{
                        ...inputStyle,
                        border: errors.salary ? "1px solid red" : "1px solid #000",
                    }}
                    min="5000" // Minimum limit set to 5000
                    max="1000000" // Maximum limit set to 1,000,000
                    step="1000"
                    required
                />
                {errors.salary && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.salary}</p>}
            </div>

            {/* Working Condition Dropdown */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="workingCondition">Working Condition</label>
                <select
                    name="workingCondition"
                    id="workingCondition"
                    value={formData.workingCondition}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        border: errors.workingCondition ? "1px solid red" : "1px solid #000",
                    }}
                >
                    <option value="" disabled>Select a working condition</option>
                    {workingConditions.map((condition, index) => (
                        <option key={index} value={condition}>{condition}</option>
                    ))}
                </select>
                {errors.workingCondition && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.workingCondition}</p>}
            </div>

            {/* Location Dropdown */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="location">Location</label>
                <select
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        border: errors.location ? "1px solid red" : "1px solid #000",
                    }}
                >
                    <option value="" disabled>Select a location</option>
                    <option value="City A - Office A">City A - Office A</option>
                    <option value="City B - Office B">City B - Office B</option>
                    <option value="City C - Office C">City C - Office C</option>
                </select>
                {errors.location && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.location}</p>}
            </div>
        </div>
    );
}

export default InternshipInformationForm;
