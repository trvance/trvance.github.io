import styled from 'styled-components'


export const LeftProject = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* gap: 1em; */

    @media (max-width: 1200px) {
        align-items: flex-start;
        flex-direction: column;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2F3437;
    border-radius: 25px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2F3437;
    box-sizing: border-box;
    border-radius: 0px 10px 10px 0px;
`

export const IconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 250px;
    height: 225px;
    border-radius: 0px 10px 10px 0px;
    box-sizing: border-box;
    padding: 2em 1em;
`

export const Icon = styled.img`
    height: 55px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    flex: 1;
    box-sizing: border-box;
    padding: 1em 2em;
`

export const Title = styled.h3`
    color: #E4E4E4;
    z-index: 5;
    /* text-shadow: 0px 2px 2px rgba(0,0,0, .8); */
`

export const Divider = styled.div`
    background-color: ${props => props.color};
    width: 80%;
    height: 2px;
`