import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 // Import the CSS for react-toastify
 import axios from 'axios';


const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="bg-blue">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="text-white">Name:</label>
                  <input type="text" placeholder="Enter the Name" className="form-control" name="username" value={username} onChange={handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">Email:</label>
                  <input type="email" placeholder="Enter email" className="form-control" name="email" value={email} onChange={handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-white">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                  />
                </div>
                <button type="submit" className="m-3 btn btn-primary btn-block">
                  Sign In
                </button>
                <Link to='/login' className='m-3 btn btn-info'>Already a User</Link>
              </form>
              <hr className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
