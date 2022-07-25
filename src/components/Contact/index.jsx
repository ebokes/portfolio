import React, { useState } from "react";
import {
  ContactWrapper,
  GithubWrapper,
  InputWrapper,
  Left,
  Line,
  LinkedInWrapper,
  MessageStyle,
  Socials,
  ContactSection,
} from "./contactStyle";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { InputData } from "./InputData";
import {
  Container,
  PageHeading,
  PageHeadingContainer,
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
    <ContactSection id="contact">
      <Container>
        <ContactWrapper>
          <Left>
            <PageHeadingContainer>
              <PageHeading data-aos="zoom-out" color="#fff" bbc="#000">
                Send me a message
              </PageHeading>
            </PageHeadingContainer>
            <form data-aos="zoom-in" onSubmit={onSubmit}>
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
          <Socials data-aos="zoom-in-up">
            <LinkedInWrapper>
              <a
                href="https://linkedin.com/in/chibuokemegbuchulam"
                target="_blank"
                rel="noreferrer"
              >
                <RiLinkedinFill size={30} color="#00102e" />
              </a>
            </LinkedInWrapper>
            <GithubWrapper>
              <a
                href="https://github.com/ebokes"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill size={45} />
              </a>
            </GithubWrapper>
            <Line />
          </Socials>
        </ContactWrapper>
        {popup && <Popup />}
      </Container>
    </ContactSection>
  );
};

export default Contact;
