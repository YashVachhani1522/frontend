import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form } from "formik";
import TextField from "../../../components/common/FormController/TextField";
import "./Login.css";
import { Link } from "react-router-dom";

import React from 'react'
import { logiValidationSchema } from "../../../Schema/login";

const Login = () => {
 
  // handleSubmit = (values, actions) => {};

  return (
    <div className="login">
      <div className="login-form">
        <Formik
          initialValues={initialValues}
          validationSchema={logiValidationSchema}
          // onSubmit={}
        >
          {(formik) => (
            <div className="row form-main-container">
              <div className="col-md-6 text-center mt-4">
                <div className="col-md-12">
                  <img
                    className="rounded-top rounded-bottom"
                    src={`./assets/images/login.gif`}
                    // src={logo}
                    width={"650dvh"}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <p className="text-center text-blue fs-2 mb-5">
                  Welcome to Urbanclap Login{" "}
                </p>
                <Form>
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Please Enter Your Email"
                  />
                  <TextField
                    type="text"
                    name="password"
                    label="Password"
                    placeholder="qwert@123"
                  />
                  <p className="text-end">
                    <Link
                      to="/forget-password"
                      className="link-offset-2 link-underline link-underline-opacity-0"
                    >
                      Forget Password?
                    </Link>
                  </p>
                  <p className="text-center">
                    <button
                      className="col-md-5 m-3 blue p-1 mt-5 rounded-pill"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </p>
                  <div className="col-11 m-3 text-center">
                    New Member?{" "}
                    <Link
                      to="/signup"
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      type="reset"
                    >
                      Create Account
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );  
}


const initialValues = {
  email: "",
  password: "",
};

  export default Login