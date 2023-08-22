import React from "react";
import style from "./styles/style.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const NewsLetter = () => {
    const { formatMessage } = useIntl();
  return (
    <>
      <section className={style.emailSection}>
        <h4>
          <FormattedMessage id="newsl" />
          <span>
            <FormattedMessage id="letter" />
          </span>
        </h4>
        <form>
          <div className="form-elements">
            <input
              type="email"
              placeholder={formatMessage({
                id: "mailPlacehlder",
              })}
            />
            <button type="submit" className="btn">
              <FormattedMessage id="join" />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewsLetter;
