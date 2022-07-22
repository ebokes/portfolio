import styled from "styled-components";
import { LinkButton } from "../reuseableComponents/Button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 1, 0.93);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
  font-family: "Ubuntu", sans-serif;
`;

export const PopupMessage = styled.div`
  width: 28rem;
  height: 28rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255);
  border: 0.1rem solid #47425d;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.4rem #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      max-width: 100%;
      width: 48%;
      position: absolute;
      top: -5rem;
      filter: drop-shadow(0.1rem 0.1rem 0.25rem #444) brightness(90%)
        contrast(85%) saturate(1);
    }

    p {
      margin-top: 5rem;
      font-weight: 700;
      line-height: 1.5;
      color: #444;
      font-size: 1.8rem;
    }
  }
`;

export const PopupButton = styled(LinkButton)`
  width: 80%;
  margin-top: 3rem;
  border: none;
  border-radius: 0.5rem;
  color: #000;
  background-color: #feb72b;
  box-shadow: 0rem 0 0.5rem 0.1rem #00000026;

  :hover {
    /* box-shadow: 30rem 0 0 0 #47425d; */
    /* color: #000; */
  }

  :hover::before {
    background-color: #022463fc;
    border-radius: 0.5rem;
    /* transform-origin: left; */
  }
`;
