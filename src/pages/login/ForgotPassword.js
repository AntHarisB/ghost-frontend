import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import LoginBgImg from "./components/LoginBgImg";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      navigate("/login");
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <LoginBgImg />

      <div className="w-full lg:w-1/2 py-20 flex flex-col items-center justify-center">
        <h2 className="text-32 font-face-gsb font-semibold text-primary  text-center  mb-6">
          Password reset
        </h2>
        <form
          className="flex justify-center items-center bg-white px-8 pt-6 pb-8 mb-4 w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-4">
              <label
                className="block text-primary font-face-m font-medium text-base mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none sm:w-450 font-face-r w-full h-12 font-normal border border-tertiary text-base border-1 border-opacity-100 rounded py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="mb-7">
              <label
                className="block text-primary font-face-m font-medium text-base mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none sm:w-450 font-face-r w-full h-12 font-normal border border-tertiary text-base border-1 border-opacity-100 rounded py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <button
              className="bg-customColor sm:w-450 font-face-gsb w-full h-12 font-semibold text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
