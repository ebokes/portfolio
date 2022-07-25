import styled from "styled-components";

const blue = ({ theme }) => theme.color.green1;

export const LinkButton = styled.a`
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: #fff;
  border: 0.1rem solid #fff;
  cursor: pointer;
  transition: all 0.6s;
  position: relative;
  z-index: 1;
  border-radius: 0.5rem;

  &:hover {
    color: #fff;
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
`;
