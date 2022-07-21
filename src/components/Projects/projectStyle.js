import styled from "styled-components";
import { HiCode } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";

// const

export const ProjectWrapper = styled.div`
  width: 100%;
  /* color: #fff; */
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;
  /* margin-bottom: 8rem; */
  /* background-color: #2c7da0; */
  background-color: #e3e3e6;
  width: 80%;
  padding: 2rem;
  box-shadow: 0 0 15px 3px #0000006a;
  align-items: center;
  margin: 4rem auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  width: 50%;
  height: 30rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 80%;
    height: 80%;
    margin-bottom: 2rem;
  }
`;

export const ProjectImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* height: 20rem; */
  position: relative;
  /* z-index: -1; */

  img {
    width: 100%;
  }

  /* &:hover{
    opacity: 1;
  } */

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    transition: transform 0.6s ease-in-out;
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
    /* background-color: red; */
    font-size: 9rem;
    text-align: end;
    font-family: "Sarabun", sans-serif;
    color: #fff;
    /* opacity: 0.9; */
    transform: scaleY(1);
    z-index: 1;
    transform-origin: bottom;
    opacity: 0.6;
  }

  &:hover::before {
    transform: scaleY(0);
    /* transform-origin: top; */
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 2;
  opacity: 0;

  h1 {
    /* position: absolute; */
    top: 0;
    right: 1rem;
    font-size: 10rem;
    font-weight: 900;
    color: #ccc;
    font-family: "Sarabun", sans-serif;
    z-index: 2;
    /* opacity: 0; */
  }

  span {
    width: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 1rem;
    bottom: 0rem;
    left: 0rem;
    /* opacity: 0; */

    a {
      padding: 0.5rem 1rem;
      background-color: #feb72b;
      color: #000;
      border-radius: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
    }

    :hover {
      opacity: 1;
    }
  }
`;

export const CodeIcon = styled(HiCode)``;

export const LiveIcon = styled(CgScreen)``;

export const Col2 = styled.div`
  width: 50%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100%;
  }

  div {
    margin-bottom: 2rem;
  }
  span p {
    display: inline-block;
    margin-right: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: #feb72b;
    border-radius: 2rem;
    color: #000;
    margin-bottom: 0.5rem;
  }
`;

// export const ImgWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6rem;
//   align-items: center;
//   max-width: 100%;
//   width: 100%;
//   z-index: 1;
//   transition: all 0.6s;

//   img {
//     max-width: 50%;
//   }
// `;

// export const Col1 = styled.div`
//   width: 45%;
//   position: relative;
//   z-index: 1;
//   color: #fff;

//   display: flex;
//   flex-direction: column;
// `;

// export const CodeIcon = styled(HiCode)`
//   margin-right: 0.5rem;
// `;

// export const LiveIcon = styled(CgScreen)`
//   margin-right: 0.5rem;
// `;

// export const Text = styled.div`
//   width: 100%;
//   height: 20rem;
//   display: flex;

//   flex-direction: column;
//   justify-content: center;
//   transition: 0.5s ease-in-out;
//   position: absolute;
//   padding-left: 10rem;
//   opacity: 0;

//   p {
//     width: 70%;
//   }

//   h4 {
//     margin: 1rem 0;
//   }

//   h1 {
//     position: absolute;
//     top: -2rem;

//     right: 1rem;
//     /* font-style: italic; */
//     font-size: 10rem;
//     font-weight: 900;
//     color: #ccc;
//     font-family: "Sarabun", sans-serif;
//     display: flex;
//     /* flex-direction: row-reverse; */
//   }

//   &:hover {
//     opacity: 1;
//   }
// `;

// export const ButtonGroup = styled.span`
//   width: 10rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 2rem;
//   margin-top: 1rem;
//   bottom: 0rem;
//   left: 0rem;

//   a {
//     padding: 0.5rem 1rem;
//     background-color: #feb72b;
//     color: #000;
//     border-radius: 0.5rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-right: 1rem;
//   }
// `;

// export const Col2 = styled.div`
//   width: 45%;
// `;

// export const Row = styled.div`
//   display: flex;
//   gap: 5rem;
// `;

// export const ProjectImgWrapper = styled.div`
//   background-color: red;
//   /* z-index: -1; */

//   img {
//     width: 100%;
//   }

//   &::before {
//     content: "";
//     /* position: absolute; */
//     width: 100%;
//     height: 100%;
//     bottom: 0;
//     left: 0;
//     transition: transform 0.6s ease-in-out;
//     background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
//     font-size: 9rem;
//     text-align: end;
//     font-family: "Sarabun", sans-serif;
//     color: #fff;
//     /* opacity: 0.9; */
//     transform: scaleY(0);
//     /* z-index: -1; */
//     transform-origin: bottom;
//     opacity: 0.8;
//   }

//   &:hover::before {
//     transform: scaleY(1);
//     /* transform-origin: top;
//     background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88)); */
//     /* background-color: #0ba4e0; */
//   }
// `;
