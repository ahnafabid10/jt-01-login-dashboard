import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        //reset success and error
        setSuccess("");
        setError(""); 

        if (email === "user1@example.com" && password === "password123") {
        const response = {
        id: 1,
        email: email,
        token: "<jwt_token>",
        };

      localStorage.setItem("user", JSON.stringify(response));

      setSuccess("Login successful");
      navigate('/dashboard');
    } else {
      setError("Something went wrong");
    }

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form action="" onSubmit={handleLogin}>
      <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input"name="password" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>  
      </form>
        {
          success && <p className="text-green-500 mt-2">{success}</p>
        }
        {
          error && <p className="text-red-500 mt-2">{error}</p>
        }
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default login;