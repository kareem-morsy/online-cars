import React from "react";
import style from "./styles/RegisterForm.module.scss";
import logo from "./assets/images/logo.png";
import Image from "next/future/image";
import Link from "next/link";
import Fackbook from "./assets/images/facebook.svg";
import Google from "./assets/images/google.svg";
import PasswordIcon from "./assets/images/passwordIcon.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import bg from "./assets/images/bg.png";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className={style.registerForm}>
        <div className="form-bg">
          <Image src={bg} alt="background-img" />

          <div className="main-form-details">
            <div className="main-form-logo">
              <Image src={logo} alt="logo-img" />
            </div>

            <h3>
              <FormattedMessage id="newLogin" />
            </h3>
            <p className="login-text">
              <FormattedMessage id="loginWith" />
            </p>

            <div className="social-login">
              <Link href="/">
                <a className="google-login">
                  <span>
                    <Google />
                  </span>
                  <FormattedMessage id="google" />
                </a>
              </Link>

              <Link href="/">
                <a className="facebook-login">
                  <span>
                    <Fackbook />
                  </span>
                  <FormattedMessage id="facebook" />
                </a>
              </Link>
            </div>

            <h4>
              <FormattedMessage id="loginpharse" />
            </h4>

            <div className="form-inputs">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="fullName" />
                      </label>
                      <input
                        type="text"
                        {...register("fullName", { required: true })}
                        className="form-control"
                      />
                      {errors?.fullName && (
                        <p className="error-message">
                          <FormattedMessage id="fullNameField" />
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="mailOrPhone" />
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="form-control"
                      />
                      {errors?.email && (
                        <p className="error-message">
                          <FormattedMessage id="emailField" />
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="password" />
                      </label>
                      <div className="password-div">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password", { required: true })}
                          className="form-control"
                          onChange={handlePasswordChange}
                        />

                        <button
                          onClick={handleShowPasswordToggle}
                          className="show-password-btn"
                        >
                          <PasswordIcon />
                        </button>
                      </div>
                      {errors?.password && (
                        <p className="error-message">
                          <FormattedMessage id="passwordField" />
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="password" />
                      </label>
                      <div className="password-div">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password", { required: true })}
                          className="form-control"
                          onChange={handlePasswordChange}
                        />

                        <button
                          onClick={handleShowPasswordToggle}
                          className="show-password-btn"
                        >
                          <PasswordIcon />
                        </button>
                      </div>
                      {errors?.password && (
                        <p className="error-message">
                          <FormattedMessage id="passwordField" />
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button className="btn">
                  <FormattedMessage id="registerBtn" />
                </button>
              </form>
            </div>

            <div className="new-account">
              <p>
                <FormattedMessage id="AlreadyHaveAcc" />
              </p>
              <Link href="/login">
                <a>
                  <FormattedMessage id="login" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
