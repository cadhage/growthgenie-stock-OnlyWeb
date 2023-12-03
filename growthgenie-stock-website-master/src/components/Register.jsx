import { useState } from "react";
import "../assets/styles.css"; // Import your CSS file for styling

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // Add other fields as needed
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const sendDataToBackend = () => {
    fetch("http://localhost:8080/api/login/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response from backend
        console.log("Response from backend:", data);
        setSuccessMessage("Welcome! Data received successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    setTimeout(() => {
      setSubmitted(true);
      setSuccessMessage("Welcome! Data received successfully");
    }, 1000);
  };

  return (
    <div>
      {!submitted ? (
        <div className="container">
          <form>
            {/* Input fields for user data */}
            <div className="input-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                className="input-field"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                className="input-field"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="input-field"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="input-field"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="input-field"
                onChange={handleInputChange}
              />
            </div>
            {/* Add other input fields for user data */}

            <button
              type="button"
              className="submit-button"
              onClick={sendDataToBackend}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="welcome-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
