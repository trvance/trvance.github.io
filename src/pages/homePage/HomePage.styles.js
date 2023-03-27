import styled from 'styled-components'


export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    padding: 2rem;
`

// Name
export const Name = styled.h1`
    background: #11998e;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #38ef7d, #11998e );  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #38ef7d, #11998e ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

// Motto and Image Container
export const MottoImageContainer = styled.div`
    display: flex;
    /* flex-direction: ${props => props.isPortrait ? 'column' : 'row'}; */
    flex-direction: column;
    flex-wrap: wrap;
    /* align-items: center; */
    /* margin-top: -2rem; */

    @media (max-width: 800px) {
        /* align-items: center; */
        /* flex-direction: column; */
        margin-top: 0;
    }
`

// Text Under Name
export const MottoText = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: -2em;
    font-weight: 600;


    @media (max-width: 1200px) {
        flex-direction: column;
        margin-top: 0em;
    }
`

export const Me = styled.img`
    /* position: absolute;
    top: 0;
    right: 0; */
    width: 35vh;
    z-index: -1;
    margin: 2rem 0rem;

    @media (pointer: coarse) {
        width: 35vh;
        margin: 0;
        /* margin: 0rem; */
    }
`

// Container for icons on bottom of screen.
export const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 7vw;
    gap: 0rem;

    @media (max-width: 730px) {
        height: 12vw;
        gap: 1rem;
    }
    
`

export const IconContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-height: 100%;
        min-width: auto;
        object-fit: cover;
    }
`

