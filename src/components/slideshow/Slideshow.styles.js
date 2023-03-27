import styled, { keyframes } from 'styled-components'


// image size. needed to know how many pixels to move container before resetting
// giving illusion the images are repeating and scrolling forever.
const IMAGESIZE_SMALL = 120 
const IMAGESIZE_MEDIUM = 150
const IMAGESIZE_LARGE = 200

// Background sizes
const BACKGROUNDHEIGHT_SMALL = 100
const BACKGROUNDHEIGHT_MEDIUM = 200
const BACKGROUNDHEIGHT_LARGE = 60

const BACKGROUNDWIDTH_SMALL = 200
const BACKGROUNDWIDTH_MEDIUM = 350
const BACKGROUNDWIDTH_LARGE = 80

const GAPSIZE = 20


const loopImages = (imageCount, direction, imageSize) => (
    direction === 'right'
    ?
    keyframes`
        0%{
            transform: translateX(-${imageCount * imageSize + imageCount * GAPSIZE}px)
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
            transform: translateX(-${imageCount * imageSize + imageCount * GAPSIZE}px)
        }
    `
)




export const Slideshow = styled.div`
    background-color: ${props => props.color};
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, .5);

    /* width: ${BACKGROUNDWIDTH_MEDIUM}px; */
    height: ${BACKGROUNDHEIGHT_MEDIUM}px;
    width: 20vw;

    @media (max-width: 1200px) {
        height: 250px;
        width: 100%;
    }
    

`

export const ScrollingContainer = styled.div`
    position: relative;
    display: flex;
    gap: ${GAPSIZE}px;

    animation: ${props => loopImages(props.imageCount, props.scrollDirection, IMAGESIZE_MEDIUM)} 8s linear infinite;

    @media (max-width: 1200px) {
        animation: ${props => loopImages(props.imageCount, props.scrollDirection, IMAGESIZE_LARGE)} 8s linear infinite;
    }
`

export const ImageContainer = styled.div`
    background-color: #339989;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 15px 20px 0px rgba(20, 20, 20, .6);

    height: ${IMAGESIZE_MEDIUM}px;
    width: ${IMAGESIZE_MEDIUM}px;

    @media (max-width: 1200px) {
        height: ${IMAGESIZE_LARGE}px;
        width: ${IMAGESIZE_LARGE}px;
    }
`

export const Image = styled.img`
    height: ${IMAGESIZE_MEDIUM}px;

    @media (max-width: 1200px) {
        height: ${IMAGESIZE_LARGE}px;
    }
`