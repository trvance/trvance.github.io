import styled from 'styled-components'


export const ProjectsPage = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    // Portrait responsive sizes.
    gap: ${props => props.isPortrait ? '4rem' : '5rem'};
    padding: ${props => props.isPortrait ? '2rem' : '2rem'};
    padding-bottom: ${props => props.isPortrait ? '8rem' : null};

`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const SubHeader = styled.h2`
    span {
        background: #11998e;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const Title = styled.h1`
    background: #11998e;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


    /* @media (max-width: 1200px) {
        font-size: 25vw;
    } */
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* max-width: 80rem;
    align-items: flex-start; */

    gap: ${props => props.isPortrait ? '10em' : '7em'};
`