import styled from 'styled-components'


export const ProjectsPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 4em;
    box-sizing: border-box;
    padding: 4em;
    overflow-y: overlay;
`

export const HeaderContainer = styled.div`
    flex: 0 0 20em;
    display: flex;
    flex-direction: column;
    /* margin-bottom: 2em; */
    /* gap: 1em; */
`

export const SubHeader = styled.h2`
    line-height: 50px;
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
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7em;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        gap: 10em;
    }
`