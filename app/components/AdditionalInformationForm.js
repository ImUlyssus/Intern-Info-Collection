export default function AdditionalInformationForm({ formData, handleChange, inputStyle, positions }) {
    return (
      <div>
        <h3>Additional Information</h3>

        {/* Languages Spoken */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="languages" style={{ display: "block", marginBottom: ".5rem" }}>Languages Spoken (Optional)</label>
          <input
            type="text"
            name="languages"
            id="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="Enter languages spoken"
            style={inputStyle}
            required
            maxLength={100}
          />
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.languages.length}/100 characters
          </p>
        </div>

        {/* Hobbies/Interests */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="hobbies" style={{ display: "block", marginBottom: ".5rem" }}>Hobbies/Interests (Optional)</label>
          <input
            type="text"
            name="hobbies"
            id="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Enter your hobbies or interests"
            style={inputStyle}
            required
            maxLength={150}
          />
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.hobbies.length}/150 characters
          </p>
        </div>

        {/* Additional Comments/Requests */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="additionalComments" style={{ display: "block", marginBottom: ".5rem" }}>Additional Comments/Requests (Optional)</label>
          <input
            type="text"
            name="additionalComments"
            id="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            placeholder="Enter any additional comments or requests"
            style={inputStyle}
            required
            maxLength={250}
          />
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            {formData.additionalComments.length}/250 characters
          </p>
        </div>
      </div>
    );
}
