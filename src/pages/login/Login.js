import React, { useState } from "react";
import "../../App.css";
import LoginBgImg from "./components/LoginBgImg";
import api from "../../Api";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    api.post("/api/token/", {
        username: userLoginData.username,
        password: userLoginData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        api
          .get("/user/", {
            headers: {
              Authorization: `Bearer ${res.data.access}`,
            },
          })
          .then((res) => {
            const filteredUser = res.data.find(
              (item) => item.username === userLoginData.username
            );
            setUser(filteredUser);
            localStorage.setItem("user", JSON.stringify(filteredUser));
            navigate("/home");
            console.log(res.data);
          });
      })
      .catch((err) => {
        setErrorMessage("Invalid username or password");
        console.log(err);
      });
  };

  const passwordReset = (e) => {
    e.preventDefault();
    api.post(`http://127.0.0.1:8000/api/password_reset/`, { email: resetEmail })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const changeUserLoginData = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCancelClick = () => {
    handleClosePopup();
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <LoginBgImg />

      <div className="w-full lg:w-1/2 py-20 flex flex-col items-center justify-center">
        <h2 className="text-32 font-face-gsb font-semibold text-primary  text-center  mb-6">
          Log in
        </h2>
        <form
          className="flex justify-center items-center bg-white px-8 pt-6 pb-8 mb-4 w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-4">
              <label
                className="block text-primary font-face-m font-medium text-base  mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="appearance-none sm:w-450  font-face-r font-normal text-base w-full h-12 border border-tertiary border-1 rounded border-opacity-100 py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type=""
                placeholder="Enter your email"
                onChange={changeUserLoginData}
              />
            </div>

            <div className="mb-7">
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
                onChange={changeUserLoginData}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            <button
              className="bg-customColor sm:w-450 font-face-gsb w-full h-12 font-semibold text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>

            <div className="flex space-x-5 justify-between w-full mt-3 ">
              <div>
                <label className="inline-flex items-center ">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-customColor h-4 w-4 mb-1"
                    name="remember"
                  />
                  <span className="ml-2 mb-1 text-base font-face-m font-medium text-primary">
                    Remember password
                  </span>
                </label>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-customColor text-right font-face-m font-medium text-base underline "
                  onClick={handleForgotPasswordClick}
                >
                  Forgot password?
                </a>
              </div>
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white w-692 h-309 rounded shadow">
                    <h2 className="text-customColor text-center font-face-m font-medium text-xl mt-4">
                      Forgot Password?
                    </h2>
                    <form>
                      <p className="text-color35 font-face-r font-normal text-sm mx-5 mt-4">
                        It appears that you have requested to reset your password
                        for your account with AntColony. We understand how
                        frustrating it can be to forget your password, but worry
                        not, we're here to assist you in regaining access to
                        your account.
                      </p>
                      <div className="mx-5 my-2">
                        <label className="block text-primary font-face-m font-medium text-base  mb-2" htmlFor="username">
                          E-mail:
                        </label>
                        <input
                          onChange={(e) => setResetEmail(e.target.value)}
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Enter your e-mail"
                          className="appearance-none sm:w-450  font-face-r font-normal text-sm w-full h-12 border border-tertiary border-1 rounded border-opacity-100 py-2 px-3 text-secondary placeholder-secondary-500 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>

                      <div className="flex justify-end mt-10 space-x-2 mx-5">
                        <button
                          className="relative  items-center justify-center  w-85 h-10 border border-customColor overflow-hidden  rounded-md "
                          onClick={handleCancelClick}
                        >
                          <span className="relative text-base font-link font-semibold  text-customColor  ">
                            Cancel
                          </span>
                        </button>
                        <button
                          type="submit"
                          onClick={passwordReset}
                          className="bg-customColor text-base font-link font-semibold h-10 w-85 text-white  rounded-md text-base "
                          onClose={handleClosePopup}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
