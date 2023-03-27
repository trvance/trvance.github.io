import styled from 'styled-components'


export const AboutMePage = styled.div`
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    gap: 7rem;
    box-sizing: border-box;
    padding: 2rem;

    @media (max-width: 1200px) {
        gap: 2rem;
        padding-bottom: 7rem;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    gap: 2rem;

    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        gap: 2rem;
    }
`

export const ContentContainer = styled.div`
    flex: 2;
    color: #e4e4e4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    /* @media (max-width: 1200px) {
        gap: 0rem;
    } */
`

export const SocialContainer = styled.div`
    flex: 1;
    color: #e4e4e4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: .5rem;

    @media (max-width: 1200px) {
        gap: 0rem;
    }
`

export const ContentTitle = styled.h1`
    font-size: 4rem;
`

export const SocialLink = styled.a`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: .5rem;
    align-self: flex-end;
    justify-content: flex-end;
    cursor: pointer;

    text-decoration: none;
    &:hover {
        h3 {
            color: #11998e;
        }
    }

    @media (max-width: 1200px) {
        letter-spacing: -2px;
    }
`

export const SocialTitle = styled.h3`
    font-weight: 600;
    font-size: 3rem;
    z-index: -1;

    /* color: #848484; */
    color: #000;
    line-height: 90%;
    margin-top: 6px;

    @media (max-width: 1200px) {
        font-size: 2rem;
    }
`

export const Icon = styled.img`
    width: 50px;
    height: auto;

    @media (max-width: 1200px) {
        width: 30px;
    }
`