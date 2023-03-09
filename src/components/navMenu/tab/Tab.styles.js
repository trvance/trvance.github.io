import styled from 'styled-components'


export const Tab = styled.a`
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }

    display: flex;
    cursor: pointer;
    background: none;
    font-size: 12px;
    font-weight: 600;
    padding: .5em 1em;
    color: #E4E4E4;
    
    &:hover {
        color: #9BDEAC;
    }

    /* &:hover:before{
        /* content: 'H'; */
    }

    &:active {
        color: #9BDEAC;
    }

    &:before {
        width: 10px;
        height: 10px;
        background-color: #9BDEAC;
        border-radius: 10px;
    } */
`