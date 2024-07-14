import { Form, Formik } from "formik";
import React from "react";
import TextField from "../../../components/common/FormController/TextField";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./forgetpass.css";

const Forgetpassword = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
  });
  return (
    <div className="forget-containere">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <div className="row form-main-container">
              {/* <div className="col-md-6 text-center mt-4">
                <div className="col-md-12">
                  <img
                    className="rounded-top rounded-bottom"
                    src={logo}
                    width={"650dvh"}
                  />
                </div>
              </div> */}
              <div className="col-md-5">
                <p className="fs-3 ">Forgot your password?</p>
                <p className="fs-6 mb-5">
                  Please enter the email you use to sign in to urbanclap
                </p>
                <Form>
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Please Enter Your Email"
                  />

                  <p className="text-center">
                    <button
                      className="col-md-5 m-3 blue p-1 mt-5 rounded-pill"
                      type="submit"
                    >
                      Rest Password
                    </button>
                  </p>
                  <div className="col-11 m-3 text-center">
                    Back to?{" "}
                    <Link
                      to="/signin"
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      type="reset"
                    >
                      Sign In
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
};

const initialValues = {
  email: "",
};


export default Forgetpassword;