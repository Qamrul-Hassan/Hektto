import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import PageLayout from "../Components/PageLayout"; // Import PageLayout component

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      setError("Error sending password reset email. Please check the email address.");
      setMessage("");
    }
  };

  return (
    <PageLayout pageTitle="Forgot Password">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Reset Your Password</h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your email address, and we will send you a link to reset your password.
        </p>

        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Send Reset Email
          </button>

          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Remembered your password?{" "}
            <a href="/login" className="text-pink-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ForgotPasswordPage;
