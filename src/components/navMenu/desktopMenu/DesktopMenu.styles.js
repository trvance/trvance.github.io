import styled from 'styled-components'


export const DesktopMenu = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 100%;
    position: fixed;
    /* background-color: blue; */
    /* width: 15rem; */
`

export const NavButton = styled.div`
    display: none;

    @media (max-width: 1200px) {
        display: flex;
        position: absolute;
    }
`

