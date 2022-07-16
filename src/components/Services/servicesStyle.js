import styled from "styled-components";

export const ServicesWrapper = styled.div``;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* justify-content: space-between; */
  /* max-width: 120rem; */
`;
export const Card = styled.div`
  padding: 4rem;
  /* width: 30%; */
  border: 1px solid #ddd;
  transition: all 0.5s;
  margin: 1.5rem 2rem;
  flex: 1;

  h3 {
    margin: 1rem 0;
    font-family: "Poppins", sans-serif;
    /* color: #002f87; */
  }

  p {
    font-family: "Poppins", sans-serif;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 9px 2px #ddd;
  }
`;
