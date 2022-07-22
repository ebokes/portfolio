import React from "react";
import thanks from "../../images/thanks.gif";
import { PopupMessage, Container, PopupButton } from "./popupStyle";

const Popup = () => {
  return (
    <Container>
      <PopupMessage>
        <div>
          <img src={thanks} alt="emoji" />
          <p>
            Thanks for reaching out ! <br /> I will get back to you as soon as
            possible
          </p>
          <PopupButton href="/home">OK</PopupButton>
        </div>
      </PopupMessage>
    </Container>
  );
};

export default Popup;
