import { useState, useEffect } from 'react'
import * as S from './Slideshow.styles'
import DJI from '../../assets/projectImages/DJI-Tello-Drone.jpg'
import OcuflyLogo from '../../assets/projectImages/Ocufly-blue-water.png'
import OcuflyPanel from '../../assets/projectImages/Ocufly-screenshot.png'


const Slideshow = ({isPortrait, images=[], color='#339989', scrollDirection='left'}) => {

	return (
		<S.Slideshow color={color} isPortrait={isPortrait}>
			{/* 
				Scrolling container needs to double images to give illusion of infinite scrolling.
				imageCount is for knowing how many pixels (imageCount * image size + margin) the 
				scrolling container needs to move before starting over. The second set of images 
				is so it looks like its scrolling when actually the animation starts over and the 
				first images are shown again.
			 */}
			<S.ScrollingContainer imageCount={images.length} scrollDirection={scrollDirection}>

				{images.map((url, index) => (
					<S.ImageContainer key={index}>
						<S.Image src={url} />
					</S.ImageContainer>
				))}

				{images.map((url, index) => (
					<S.ImageContainer key={index}>
						<S.Image src={url} />
					</S.ImageContainer>
				))}

				{images.map((url, index) => (
					<S.ImageContainer key={index}>
						<S.Image src={url} />
					</S.ImageContainer>
				))}
				 
			</S.ScrollingContainer>
		</S.Slideshow>
	)
}

export default Slideshow




