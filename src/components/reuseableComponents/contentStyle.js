import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  padding: 9rem 0 5rem 0;
  /* overflow: hidden; */
  scroll-snap-align: start;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    width: 95%;
  }
`;

export const PageHeadingContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
`;

export const PageHeading = styled.h1`
  padding-bottom: 0.5rem;
  position: relative;
  margin-bottom: 3rem;
  color: #fff;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ color }) => color};
  }

  &::before {
    content: "";
    width: 100%;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    transition: transform 250ms ease-in-out;
    transform: scaleX(0.5);
    background-color: #feb72b;
  }
  &:hover::before {
    transform: scaleX(1);
    background-color: #feb72b;
  }
`;

export const SubHeading = styled(PageHeading)`
  font-size: 2rem;
  margin-bottom: 1rem;

  &::before {
    height: 0.2rem;
  }
  &:hover::before {
    height: 0.2rem;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const MainHeading = styled.h1`
  font-size: 3.2rem;
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
