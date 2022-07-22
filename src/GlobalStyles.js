import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    @media screen and (max-width: ${({ theme }) => theme.screens.lg}){
        font-size: 60%;    
    }

    @media screen and (max-width: ${({ theme }) => theme.screens.md}){
        font-size: 58%;
    }

    @media screen and (max-width: ${({ theme }) => theme.screens.md}){
        font-size: 54%;
    }
}

body{
    font-family: "Mulish", sans-serif;
    font-size: 1.6rem;
    background-color: #0a192f;
    /* color: #64ffda; */
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

`;
