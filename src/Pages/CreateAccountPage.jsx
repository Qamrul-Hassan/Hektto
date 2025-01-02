import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google icon from react-icons
import { IoLogoWindows } from "react-icons/io"; // Microsoft icon from react-icons
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

  // Google Sign-In
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Send email verification
      await sendEmailVerification(user);
      alert("Account created successfully via Google! Please check your email for verification.");

      navigate("/login");
    } catch (error) {
      setError("Error with Google sign-up: " + error.message);
    }
  };

  // Microsoft (Hotmail) Sign-In
  const handleMicrosoftSignUp = async () => {
    const provider = new OAuthProvider('microsoft.com'); // Use Microsoft provider
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Send email verification
      await sendEmailVerification(user);
      alert("Account created successfully via Microsoft! Please check your email for verification.");

      navigate("/login");
    } catch (error) {
      setError("Error with Microsoft sign-up: " + error.message);
    }
  };

  return (
    <PageLayout pageTitle="Create Account">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2 font-josefin text-[#1D3178]">Create Account</h2>
        <p className="text-gray-500 text-center mb-6 font-lato">Fill the form below to create a new account.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-lato">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-lato">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-lato">User ID</label>
            <input
              type="text"
              placeholder="User ID"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-500"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-lato">Email</label>
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
            <label className="block text-sm font-medium mb-1 font-lato">Password</label>
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
            <label className="block text-sm font-medium mb-1 font-lato">Confirm Password</label>
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4 font-lato"
          >
            Create Account
          </button>
        </form>

        {/* Sign-in buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded text-sm text-gray-700 shadow-md hover:bg-gray-50"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign up with Google
          </button>
          <button
            onClick={handleMicrosoftSignUp}
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded text-sm text-gray-700 shadow-md hover:bg-gray-50"
          >
            <IoLogoWindows className="mr-2 text-2xl" />
            Sign up with Microsoft
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateAccountPage;
