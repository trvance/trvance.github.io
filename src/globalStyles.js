import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
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
        font-size: 14vw;
        
        @media (max-width: 12cm) {
            line-height: 21vw;
            font-size: 25vw;
        }
    }

    h2 {
        font-family: 'Source Sans Pro';

        line-height: ${props => props.isPortrait ? '10vw' : '4vw'};
        font-size: ${props => props.isPortrait ? '11vw' : '5vw'};
        letter-spacing: ${props => props.isPortrait ? '-4px' : '0px'};

        span {
            background: #11998e;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to left, #38ef7d 10%, #11998e 80%);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to left, #38ef7d 10%, #11998e 80%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    h3 {
        font-family: 'Bebas Neue';
        font-size: 55px
    }

    p {
        font-family: 'Source Sans Pro';
        color: #B4B4B4;
        font-size: 20px;
        font-weight: 500;

        span {
            background: #11998e;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to left, #38ef7d 10%, #11998e 80%);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to left, #38ef7d 10%, #11998e 80%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 30px;
        }
    }
`


export const App = styled.div`
    display: flex;
    /* height: 100dvh; */
    /* width: 100vw; */

    flex-direction: ${props => props.isPortrait ? 'column' : 'row'};
`

export const NavContainer = styled.div`
    flex: 0 0 15rem;
`

export const PageContainer = styled.div`
    flex: 1;
    /* width: ${props => props.isPortrait ? '100vw' : `calc(100vw - 15rem)`}; */
    /* width: 100%; */
    height: 100dvh;
    overflow-y: overlay;
`
export const MenuButtonContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
`
