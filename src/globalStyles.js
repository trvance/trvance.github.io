import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        /* font-family: Helvetica; */
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #393E41;
    }

    h1 {
        /* font-family: 'Lobster'; */
        font-family: 'Bebas Neue';
        font-size: 15vw;

        @media (max-width: 1200px) {
            font-size: 20vw;
        }
    }

    h2 {
        font-family: 'Source Sans Pro';
        font-size: 4vw;

        span {
            background: #11998e;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to left, #38ef7d 10%, #11998e 80%);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to left, #38ef7d 10%, #11998e 80%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @media (max-width: 1200px) {
            font-size: 30px;
        }
    }

    h3 {
        font-family: 'Bebas Neue';
        font-size: 55px
    }

    p {
        font-family: 'Source Sans Pro';
        color: #B4B4B4;
        font-size: 18px;
        font-weight: 600;
    }
`

export const App = styled.div`
    display: flex;
`

export const NavContainer = styled.div`
    display: flex;
    height: 100vh;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const PageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100dvh; // Dynamic View Height.  Helps with iPhone search bar affecting height.

    min-height: -webkit-fill-available;
`

