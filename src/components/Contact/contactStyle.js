import styled from "styled-components";

const blue = ({ theme }) => theme.color.green1;
// const white = ({ theme }) => theme.color.white;

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
      background-color: ${blue};
      color: #fff;
      border: 0.2rem solid ${blue};
      width: 30%;
      cursor: pointer;
      transition: all 0.6s;
      position: relative;
      z-index: 1;

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

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  input {
    padding: 1.5rem;
    background-color: #00102e;
    outline: none;
    border: none;
    margin: 0.5rem 0 1rem 0;
    background-color: #eee;
    color: #333;
    font-size: 1.5rem;
    width: 100%;
    /* box-shadow: 0 0 0.5rem 0.2rem rgb(0 0 0 / 20%); */
    box-shadow: 0rem 0rem 0.5rem 0.2rem rgba(0, 0, 0, 0.237);

    &::placeholder {
      color: #777;
    }
    &:focus {
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #eee inset !important;
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
    /* background-color: inherit; */
    /* border: 0.1rem solid #000; */
    margin: 0.5rem 0 1rem 0;
    /* color: #000; */
    font-size: 1.5rem;
    font-family: "Mulish", sans-serif;
    background-color: #eee;
    color: #333;
    outline: none;
    border: none;
    box-shadow: 0rem 0rem 0.5rem 0.2rem rgba(0, 0, 0, 0.237);

    &::placeholder {
      font-family: "Mulish", sans-serif;
      font-size: 1.4rem;
      color: #777;
    }
  }
`;

export const Left = styled.div`
  width: 80%;
  padding-top: 2rem;
  margin: 0 auto;
`;
