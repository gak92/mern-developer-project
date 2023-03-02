import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({email, password})
    });

    const data = await res.json();

    if(data.status === 400 || !data) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    }
    else {
      window.alert("login successful");
      console.log("login successful");
    }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">

          <div className="signup-image">
              {/* <figure>
                <img src={signpic} alt="Registration pic" />
              </figure> */}
              <NavLink to="/registration" className="signup-image-link">
                Register
              </NavLink>
            </div>

            <div className="signup-form">
              <h2 className="form-title">Log In</h2>
              <form className="login-form" id="login-form" method="POST">
                
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login