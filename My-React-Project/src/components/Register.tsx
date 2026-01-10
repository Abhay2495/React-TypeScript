import { useNavigate } from "react-router-dom";
import "./Register.css"; // import the CSS file

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>

        <div className="register-row">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" />
        </div>

        <div className="register-row">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>

        <div className="register-row">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className="register-row">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>

        <div className="register-row">
          <label>Contact</label>
          <input type="number" placeholder="Enter Contact Number" />
        </div>

        <div className="register-button-container">
          <button
            onClick={() => navigate("/login")}
            className="register-button"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
