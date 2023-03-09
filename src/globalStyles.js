import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Helvetica;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #393E41;
    }

    h1 {
        font-family: 'Lobster';
    }
`

export const App = styled.div`
    display: flex;
    /* flex-direction: column; */
`

