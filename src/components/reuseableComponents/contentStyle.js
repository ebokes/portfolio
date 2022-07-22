import styled from "styled-components";

const blue = ({ theme }) => theme.color.green1;

export const Section = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  padding: 7rem 0 5rem 0;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;

export const PageHeading = styled.h1`
  padding-bottom: 0.5rem;
  transition: all;
  position: relative;
  margin-bottom: 3rem;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  /* display: inline-flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  transition: 0.5s;
  color: ${({ color }) => color || blue};
  transition: all 0.5s ease-in-out;
  /* color: #64ffda; */
  /* color: ${({ color }) => color}; */
  /* border-bottom: 0.2rem solid #000;
  width: 10%; */

  &:hover {
    color: ${({ color }) => color};
  }

  &::before {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: ${({ bbc }) => bbc || "#000"};
    position: absolute;
    bottom: 0;
    /* left: 0; */
    transition: transform 250ms ease-in-out;

    transform: scaleX(0.5);
    /* transform-origin: right; */
    background-color: ${({ color }) => color};
  }
  &:hover::before {
    transform: scaleX(1);
    /* transform-origin: left; */
    background-color: ${({ color }) => color};
  }
`;

export const MainHeading = styled.h1`
  font-size: 3.2rem;
`;

export const SubHeading1 = styled.h2`
  font-size: 2.4rem;
`;

export const SubHeading2 = styled.h3`
  font-size: 2.08rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ jc }) => jc};
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => fd || "column"};
  flex-wrap: ${({ wrap }) => wrap};
  width: ${({ width }) => width};
`;
