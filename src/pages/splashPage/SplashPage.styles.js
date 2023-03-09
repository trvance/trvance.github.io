import styled from 'styled-components'


export const SplashPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Me = styled.img`
    width: 20vw;
    margin: 0em -3em;
    z-index: 0;
`

export const Name = styled.h1`
    /* font-size: 10em; */
    font-size: 15vw;
    color: #9BDEAC;
    z-index: 1;
    text-shadow: 1px 3px 15px #292929;
`

export const OverlappingText = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Yanone Kaffeesatz';
    flex-wrap: wrap;

    p {
        font-family: 'Yanone Kaffeesatz';
        font-size: 3em;
        font-weight: 600;
        color: #e4e4e4;
    }
`

export const GradientText = styled.span`
    color: #587B7F;
    font-family: 'Yanone Kaffeesatz';
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0px;
    margin: 1em;
`