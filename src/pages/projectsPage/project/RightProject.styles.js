import styled from 'styled-components'


export const RightProject = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media (max-width: 1200px) {
        align-items: flex-end;
        flex-direction: column;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
    align-items: flex-end;
    gap: .5em;
    flex: 1;
    box-sizing: border-box;
    padding: 1em 2em;

    text-align: right;
`

export const Title = styled.h3`
    color: #E4E4E4;
    z-index: 5;
`

export const Divider = styled.div`
    background-color: ${props => props.color};
    /* width: 10em; */
    width: 80%;
    height: 2px;
`