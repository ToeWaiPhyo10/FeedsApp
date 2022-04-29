import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

export default function Authentication(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [{ isloading, response, error }, doFetch] = useFetch("/users/login");
  const handleSubmit = (e) => {
    e.preventDefault();
    doFetch({
      method: "post",
      data: {
        user: { email: "qq@q.com", password: "123" },
      },
    });

    console.log("values", email, password);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an accout?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={isloading}
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
