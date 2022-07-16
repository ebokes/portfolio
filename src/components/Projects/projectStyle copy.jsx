import styled from "styled-components";

export const ProjectWrapper = styled.div`
  .box {
    width: 40rem;
    height: 40rem;
    background-color: blue;
    /* border-radius: 50%; */
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: -10rem 11rem;
      background: linear-gradient(35deg, #feb72b, wheat);
      transition: 0.5s;
      animation: animate 10s linear infinite;
    }

    &:hover::before {
      /* inset: -2rem 0rem; */
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0.6rem;
      background: blue;
      border-radius: 1rem;
      /* border-radius: 50%; */
      z-index: 1;
    }
  }

  .content {
    position: absolute;
    inset: 0.5rem;
    border: 0.6rem solid black;
    z-index: 3;
    border-radius: 1rem;
    /* border-radius: 50%; */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s;
      pointer-events: none;
      z-index: 3;
    }
  }

  .box:hover .content img {
    opacity: 0;
  }

  .content h2 {
    position: relative;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      color: #fff;
      font-size: 2rem;
      font-family: "Poppins", sans-serif;
    }

    a {
      text-decoration: none;
      color: #000;
      background-color: #fff;
      border-radius: 0.5rem;
      padding: 0.6rem 1.5rem;
    }
  }
`;
