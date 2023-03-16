import styled, { keyframes } from 'styled-components'


// image size. needed to know how many pixels to move container before resetting
// giving illusion the images are repeating and scrolling forever.
const IMAGESIZE = 130 
// const LARGESCREENIMAGESIZE = 20vw;
const GAPSIZE = 20


const loopImages = (imageCount, direction) => (
    direction === 'right'
    ?
    keyframes`
        0%{
            transform: translateX(-${imageCount * IMAGESIZE + imageCount * GAPSIZE}px)
        }
        100%{
            // How many images * the image size to scroll the container.
            // Also accounts for the gap size.
            transform: translateX(0)
        }
    `
    :
    keyframes`
        0%{
            transform: translateX(0)
        }
        100%{
            // How many images * the image size to scroll the container.
            // Also accounts for the gap size.
            transform: translateX(-${imageCount * IMAGESIZE + imageCount * GAPSIZE}px)
        }
    `
)




export const Slideshow = styled.div`
    background-color: ${props => props.color};
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;

    max-height: 14em;
    max-width: 20em;
    min-height: 14em;
    min-width: 20em;
`

export const ScrollingContainer = styled.div`
    position: relative;
    display: flex;
    gap: ${GAPSIZE}px;

    animation: ${props => loopImages(props.imageCount, props.scrollDirection)} 8s linear infinite;
`

export const ImageContainer = styled.div`
    height: ${IMAGESIZE}px;
    width: ${IMAGESIZE}px;
    background-color: #339989;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 15px 20px 0px rgba(20, 20, 20, .6);
`

export const Image = styled.img`
    height: ${IMAGESIZE}px;
`