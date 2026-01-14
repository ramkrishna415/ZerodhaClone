import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./index.css"; // Fixed: Path corrected

const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        // SIGNUP API Call
        const res = await axios.post(
          "http://localhost:3002/api/register",
          formData
        );
        alert(res.data.message || "Registration Successful!");
        setIsSignup(false); // Signup ke baad Login mode par switch karein
      } else {
        // LOGIN API Call
        const res = await axios.post(
          "http://localhost:3002/api/login",
          {
            username: formData.username,
            password: formData.password
          }
        );

        localStorage.setItem("token", res.data.token);
        alert("Login Successful");
        navigate("/"); // Yahan apne home/dashboard page ka path dein
      }
    } catch (err) {
      // Error handling behtar banayi gayi hai
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ width: "350px", margin: "100px auto", textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={{ marginBottom: "10px", padding: "8px", width: "90%" }}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{ marginBottom: "10px", padding: "8px", width: "90%" }}
              onChange={handleChange}
              required
            />
            <br />
          </>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          style={{ marginBottom: "10px", padding: "8px", width: "90%" }}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ marginBottom: "10px", padding: "8px", width: "90%" }}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", width: "95%" }}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <span
          style={{ color: "blue", cursor: "pointer", marginLeft: "5px", fontWeight: "bold" }}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login here" : "Signup here"}
        </span>
      </p>
    </div>
  );
};

export default Signup;
