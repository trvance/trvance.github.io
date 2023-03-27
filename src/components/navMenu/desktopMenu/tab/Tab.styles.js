import styled from 'styled-components'


export const TabBackground = styled.div`
    writing-mode: vertical-lr;
    transform: scale(-1, -1);
    font-size: 5rem;
    font-weight: 600;
    font-family: 'Bebas Neue';
    width: 80px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    z-index: 1;
    display: flex;
    /* align-items: right; */
    justify-content: space-between;


    background-color: ${props => props.backgroundColor};


    /* &:hover {
        font-size: 5.3em;
        z-index: 5;

        img {
            height: 75px;
            width: 75px;
        }
    }

    &:active {
        font-size: 5.1em;
    } */


    @media (max-height: 700px) {
        font-size: 3rem;

        /* &:hover {
            font-size: 3.3rem;
        } */
    }
`

export const TabText = styled.a`
    color: ${props => props.fontColor};

    transition: font-size .1s, color .1s;
    position: relative;
    right: 1.5rem;

    @media (max-height: 700px) {
        right: .9rem;
    }
`

export const Icon = styled.img`
    align-self: center;
    transform: rotate(180deg);
    height: 60px;
    width: 60px;
    margin-bottom: 1rem;
    opacity: ${props => props.isSelected ? '1' : '.5'};

    filter: ${props => props.isSelected ? `invert(41%) sepia(97%) saturate(380%) hue-rotate(126deg) brightness(97%) contrast(93%)` : null};
    /* filter: ${props => props.isSelected ? `invert(99%) sepia(0%) saturate(510%) hue-rotate(268deg) brightness(82%) contrast(85%)` : null}; */
    transition: filter .2s, opacity .2s;
`