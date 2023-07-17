import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginBgImg from "./components/LoginBgImg";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get("token");

      const data = {
        new_password: password
      };

      axios
        .post(`http://127.0.0.1:8000/api/password_reset/confirmation/?token=${token}`, data)
        .then((response) => {
          setErrorMessage(""); // Resetiranje poruke o pogrešci ako postoji
          navigate("/login");
        })
        .catch((error) => {
          setErrorMessage("Error changing password");
        });
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  useEffect(() => {
    // Opcionalno: Možete postaviti logiku provjere valjanosti tokena ili druge dodatne operacije ovdje
  }, []);

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