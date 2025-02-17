import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import Firebase auth
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import PageLayout from "../Components/PageLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/"); // Redirect to homepage after successful login
    } catch (error) {
      setError("Invalid credentials or user not found!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PageLayout pageTitle="My Account">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2 font-josefin text-[#1D3178]">Login</h2>
        <p className="text-gray-500 text-center mb-6 font-lato">
          Please login using your account details below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-lato" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1 font-lato" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500 pr-12" // Added pr-12 for padding
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center h-full"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500 text-xl" /> 
                ) : (
                  <FaEye className="text-gray-500 text-xl" /> 
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-pink-500 text-sm hover:underline font-lato">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 font-lato"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6 font-lato">
          Don’t have an account?{" "}
          <Link to="/create-account" className="text-pink-500 hover:underline font-lato">
            Create account
          </Link>
        </p>
      </div>
    </PageLayout>
  );
};

export default LoginPage;