import styled from "styled-components";

export const ServicesWrapper = styled.div``;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  padding: 4rem;
  /* width: 30%; */
  border: 1px solid #ddd;
  transition: all 0.5s;
  margin: 1.5rem 2rem;
  flex: 1;
  border-radius: 5px;
  background-color: #fff;

  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    padding: 2rem;
    margin: 1.5rem 0;
  }

  h3 {
    margin: 1rem 0;
    font-family: "Poppins", sans-serif;
  }

  p {
    font-family: "Poppins", sans-serif;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 8px 3px #00000036;

    @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
      transform: scale(1);
      box-shadow: none;
    }
  }
`;
