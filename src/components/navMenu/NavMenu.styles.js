import styled from 'styled-components'


export const NavMenu = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    padding-left: 2em;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    /* box-sizing: border-box;  */
`


export const SmallDisplay = styled.div`
    display: none;

    @media (max-width: 1000px) {
        display: flex;
    }
`

export const LargeDisplay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 2em;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    box-sizing: border-box;
`


export const ScrollIndicatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* background-color: saddlebrown; */
    height: 160px;

    @media (max-width: 1000px) {
        display: none;
    }
`
export const ScrollIndicator = styled.div`
    background-color: #9BDEAC;
    transform-origin: 0%;
    /* height: 80%; */
    width: 10px;
    border-radius: 100px;

`

export const TabsContainer = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    /* padding: 2em; */
    gap: 1.5em;

    @media (max-width: 1000px) {
        display: none;
    }
`

