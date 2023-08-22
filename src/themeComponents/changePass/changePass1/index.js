import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/future/image";

import style from "./styles/ChangePass.module.scss";

import changePassImg from "./assets/images/changePassImg.png";
import logo from "./assets/images/logo.png";
import PasswordIcon from "./assets/images/passwordIcon.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const ChangePass = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    newPassword: false,
  });

  const [passwordValue, setPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");

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
      <section className={style.changePassword}>
        <div className="login-form-details">
          <div className="login-form-logo">
            <Link href="/">
              <a><Image src={logo} alt="logo-img" /></a>
            </Link>
          </div>

          <h3><FormattedMessage id="changePass"/></h3>
          <p className="login-text"><FormattedMessage id="twicePassword"/></p>

          <div className="form-inputs">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label><FormattedMessage id="newPassword"/></label>
                <div className="password-div">
                  <input
                    type={showPassword?.password ? "text" : "password"}
                    {...register("password", { required: true })}
                    className="form-control"
                    value={passwordValue}
                    onChange={(e) => {
                      setPasswordValue(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      setShowPassword({
                        ...showPassword,
                        password: !showPassword?.password,
                      });
                    }}
                    type="button"
                    className="show-password-btn"
                  >
                    <PasswordIcon />
                  </button>
                </div>
                {errors?.password && (
                  <p className="error-message">برجاء كتابة كلمة المرور</p>
                )}
              </div>

              <div className="form-group">
                <label><FormattedMessage id="newPassAgain"/></label>
                <div className="password-div">
                  <input
                    {...register("newPassword", { required: true })}
                    type={showPassword?.newPassword ? "text" : "password"}
                    className="form-control"
                    value={newPasswordValue}
                    onChange={(e) => {
                      setNewPasswordValue(e.target.value);
                    }}
                  />

                  <button
                    onClick={() => {
                      setShowPassword({
                        ...showPassword,
                        newPassword: !showPassword?.newPassword,
                      });
                    }}
                    type="button"
                    className="show-password-btn"
                  >
                    <PasswordIcon />
                  </button>
                </div>
                {passwordValue !== newPasswordValue && (
                  <p className="error-message">كلمة المرور غير متطابقة</p>
                )}
              </div>

              <button className="btn"><FormattedMessage id="submitNewPass"/></button>
            </form>
          </div>
        </div>

        <div className="login-form-img">
          <Image src={changePassImg} alt="login-img" priority />
        </div>
      </section>
    </>
  );
};

export default ChangePass;
