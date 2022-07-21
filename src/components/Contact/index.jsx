import React, { useState } from "react";
import {
  ContactWrapper,
  InputWrapper,
  Left,
  MessageStyle,
  Right,
} from "./contactStyle";
import { IoCallSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { InputData } from "./InputData";
import {
  Container,
  PageHeading,
  Section,
} from "../reuseableComponents/contentStyle";
import Popup from "../Popup";
import { send } from "emailjs-com";

const Contact = () => {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => setPopup((prevState) => !prevState);

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formInfo,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log(formInfo);
        handlePopup();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setFormInfo({ [e.target.name]: "" });
    console.log(formInfo);
  };
  return (
    <Section id="contact" bgcolor="#000">
      <Container>
        <ContactWrapper>
          <Left>
            <PageHeading color="#fff" bbc="#000">
              Send me a message
            </PageHeading>
            <form onSubmit={onSubmit}>
              {InputData.map((input) => (
                <InputWrapper key={input.id}>
                  {/* <label htmlFor={input.name}>{input.label}:</label> */}
                  <input
                    placeholder={input.placeholder}
                    name={input.name}
                    type={input.type}
                    required
                    value={formInfo[input.name]}
                    onChange={onChange}
                  />
                </InputWrapper>
              ))}
              <MessageStyle>
                <textarea
                  rows={10}
                  id="message"
                  name="message"
                  placeholder="Write your notes or questions here"
                  value={formInfo.message}
                  onChange={onChange}
                  required
                />
              </MessageStyle>
              <button type="submit">Submit</button>
            </form>
          </Left>
          {/* <Right>
            <PageHeading color="#000" bbc="#000">
              Connect with me
            </PageHeading>
            <div>
              <a
                href="linkedin.com/in/chibuokemegbuchulam"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin size={30} color="#000" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/ebokes"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub size={30} color="#000" />
              </a>
            </div>
          </Right> */}
        </ContactWrapper>
        {popup && <Popup />}
      </Container>
    </Section>
  );
};

export default Contact;
