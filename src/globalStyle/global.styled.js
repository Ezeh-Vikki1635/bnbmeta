import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
        font-size: 62.5%;

        @media (max-width: 72em) {
            font-size: 60%;
        } 

        @media (max-width: 68em) {
            font-size: 56%;
        } 

        @media (max-width: 63em) {
            font-size: 52%;
        }  

        @media (max-width: 58em) {
            font-size: 44%;
        }   

        @media (max-width: 49em) {
            font-size: 40%;
        }   
        
        @media (max-width: 45em) {
            font-size: 36%;
        }  
        
        /*
        @media (max-width: 41em) {
    font-size: 30%;
        } */

      

}


*, *:before, *:after {
  box-sizing: border-box;
}


body {
    font-family: 'Red Rose', cursive;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    background: #fff;

    }

ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyles;
