import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import PageLayout from "../Components/PageLayout";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState(""); // Changed to User ID
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,100}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (inputPassword.length > 100) {
      setPasswordError("Password cannot exceed 100 characters.");
    } else if (!validatePassword(inputPassword)) {
      setPasswordError(
        "Password must include an uppercase letter, a lowercase letter, a number, and a special character (e.g., @, $, %, &, *, !, #, ?)."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Email validation
    if (!validateEmail(inputEmail)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if fields are empty
    if (!firstName || !lastName || !userId || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      alert("Account created successfully! Please check your email for verification.");

      navigate("/login");

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please choose a different one.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("The email address is not valid.");
      } else {
        setError("Error: " + error.message);
      }
    }
  };

  return (
    <PageLayout pageTitle="Create Account">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-6">Fill the form below to create a new account.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User ID</label>
            <input
              type="text"
              placeholder="User ID"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 text-sm">Already have an account? Login</Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateAccountPage;
