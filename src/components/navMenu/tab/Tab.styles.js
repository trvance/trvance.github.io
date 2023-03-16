import styled from 'styled-components'


export const TabBackground = styled.div`
    writing-mode: vertical-lr;
    transform: scale(-1, -1);
    font-size: 5em;
    font-weight: 600;
    font-family: 'Bebas Neue';
    width: 80px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    z-index: 1;
    display: flex;
    align-items: right;


    background-color: ${props => props.backgroundColor};


    &:hover {
        font-size: 5.3em;
        z-index: 5;
    }

    &:active {
        font-size: 5.1em;
    }
`

export const TabText = styled.a`
    color: ${props => props.fontColor};

    transition: font-size .1s, color .1s;
    position: relative;
    right: 23px;
`