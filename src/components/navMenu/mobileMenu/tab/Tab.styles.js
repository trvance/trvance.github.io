import styled from 'styled-components'


export const Tab = styled.button`
    font-family: 'Source Sans Pro';
    font-weight: 700;
    box-sizing: border-box;
    padding: .2em;
    background: none;
    outline: none;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: ${props => props.selected ? '#2F3437' : '#000'}; // if selected color matches navmenu background color to blend in and not appear through icon
    z-index: 1;
`

export const Icon = styled.img`
    height: 40px;
    z-index: 0;
    transition: transform .1s;
    transform: ${props => props.selected ? 'scale(2.6)' : null};
    opacity: ${props => props.selected ? 1 : .5};

    filter: ${props => props.selected ? `invert(41%) sepia(97%) saturate(380%) hue-rotate(126deg) brightness(97%) contrast(93%)` : null};
    /* filter: ${props => props.selected ? `invert(99%) sepia(0%) saturate(510%) hue-rotate(268deg) brightness(82%) contrast(85%)` : null}; */

`