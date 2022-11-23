import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    a {
        text-decoration: none;
    }
    ul li {
        list-style: none;
    }
    button {        
        cursor: pointer;
        border: none;
    }
    button, input, textarea {
        outline: none;
    }

`