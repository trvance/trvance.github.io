import styled from 'styled-components'


export const SplashPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    /* background-color: blue; */
    height: 100%;

    @media (max-width: 1200px) {
        justify-content: center;
        height: 100%;
        min-height: 100dvh;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const MeLargeDisplay = styled.img`
    width: 20vw;
    margin: 0em -3em;
    z-index: 0;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const MeSmallDisplay = styled.img`
    display: none;
    height: 80vw;


    @media (max-width: 1200px) {
        display: inline;
    }
`

export const FirstName = styled.h1`
    z-index: 1;
    color: #11998e;
`

export const LastName = styled.h1`
    z-index: 1;
    color: #11998e;
`

export const OverlappingText = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`

export const GradientText = styled.span`
    color: #587B7F;
    font-family: 'Yanone Kaffeesatz';
`

export const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* bottom: 50px; */

    img {
        height: 8vw;
        max-height: 75px;
    }
`

