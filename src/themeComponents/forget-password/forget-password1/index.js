import style from "./styles/ForgetPass.module.scss";
import logo from "./assets/images/logo.png";
import Image from "next/future/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Resend from "./assets/images/resend.svg";
import { FormattedMessage } from "react-intl";
import bg from "./assets/images/bg.png";

const ForgetPass = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className={style.forgetPass}>
        <div className="form-bg">
          <Image src={bg} alt="background-img" />
          <div className="main-form-details">
            <div className="main-form-logo">
              <Image src={logo} alt="logo-img" />
            </div>

            <h3>
              <FormattedMessage id="forgetPasspage" />
            </h3>
            <p className="login-text">
              <FormattedMessage id="resendText" />
            </p>

            <div className="form-inputs">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="mailOrPhone" />
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                  />
                  <p className="error-message">{errors.email?.message}</p>
                </div>

                <button className="btn" type="submit">
                  <FormattedMessage id="sendBtn" />
                </button>

                <div className="resend">
                  <button type="button" className="resend-btn">
                    <Resend />
                    <FormattedMessage id="resend" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPass;
