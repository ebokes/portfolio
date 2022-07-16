import styled from "styled-components";

const blue = ({ theme }) => theme.color.green1;

// export const LinkButtonn = styled.a`
//   background: linear-gradient(to left, #ffd00a, #feb72b);
//   padding: 0.7rem 1.2rem;
//   transition: all 0.5s;
//   color: #2b2d42e3;

//   &:hover {
//     color: white;
//   }
// `;

export const LinkButton = styled.a`
  padding: 1rem 2rem;
  text-transform: uppercase;
  /* background-color: ${blue}; */
  color: #fff;
  /* border: 0.2rem solid ${blue}; */
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
