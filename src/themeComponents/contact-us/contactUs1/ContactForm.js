import Image from "next/future/image";
import formImg from "./assets/images/form-img.png";
import { FormattedMessage, useIntl } from "react-intl";
const ContactForm = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="contact-form">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="contact-form-details">
              <h4>
                <FormattedMessage id="contactUs" />
              </h4>
              <form>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label>
                      <FormattedMessage id="firstName" />*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={formatMessage({
                        id: "firstName",
                      })}
                    />
                  </div>

                  <div className="col-md-6 col-12">
                    <label>
                      <FormattedMessage id="secondName" />*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={formatMessage({
                        id: "secondName",
                      })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    <FormattedMessage id="title" />*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={formatMessage({
                      id: "title",
                    })}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FormattedMessage id="message" />*
                  </label>
                  <textarea className="form-control"></textarea>
                </div>

                <button type="submit">
                  <FormattedMessage id="sendBtn" />
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <div className="form-img">
              <Image src={formImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
