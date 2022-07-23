import styled from "styled-components";

const blue = ({ theme }) => theme.color.green1;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  form {
    display: flex;
    flex-direction: column;
    color: #000;

    label {
      font-size: 1.4rem;
    }

    button {
      padding: 1.5rem 0;
      text-transform: uppercase;
      /* background-color: ${blue}; */
      background-color: #feb72b;
      /* color: #fff; */
      color: #000;
      border: 0.2rem solid ${blue};
      width: 30%;
      cursor: pointer;
      transition: all 0.6s;
      position: relative;
      z-index: 1;

      @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
      }

      &:hover {
        color: ${blue};
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 250ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
        z-index: -1;
      }

      &:hover::before {
        transform: scaleX(1);
        background-color: #fff;
      }
    }
  }
`;

export const Left = styled.div`
  width: 80%;
  padding-top: 2rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  input {
    padding: 1.5rem;
    background-color: #00102e;
    outline: none;
    border: none;
    /* border-bottom: 2px solid #092aae; */
    margin: 0.5rem 0 1rem 0;
    /* background-color: #eee; */
    /* background-color: #aaa; */
    background-color: #e3e3e6;
    /* background-color: transparent; */
    color: #333;
    /* color: #000; */
    font-size: 1.5rem;
    width: 100%;
    /* box-shadow: 0 0 0.5rem 0.2rem rgb(0 0 0 / 20%); */
    box-shadow: 0rem 0rem 0.5rem 0.2rem rgba(0, 0, 0, 0.237);

    &::placeholder {
      color: #555;
    }
    &:focus {
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #eee inset !important;
      box-shadow: 0 0 0 30px #eee inset !important;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: #333 !important;
    }
  }
`;

export const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    padding: 1rem;
    margin: 0.5rem 0 1rem 0;
    font-size: 1.5rem;
    font-family: "Mulish", sans-serif;
    /* background-color: #aaa; */
    background-color: #e3e3e6;
    color: #000;
    outline: none;
    border: none;
    box-shadow: 0rem 0rem 0.5rem 0.2rem rgba(0, 0, 0, 0.237);

    &::placeholder {
      font-family: "Mulish", sans-serif;
      font-size: 1.4rem;
      color: #555;
    }
  }
`;

export const Socials = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`;

export const Line = styled.div`
  border-left: 1px solid #fff;
  height: 12rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const LinkedInWrapper = styled(SocialIcons)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: blue;
  background-color: #fff;
`;

export const GithubWrapper = styled(SocialIcons)``;
