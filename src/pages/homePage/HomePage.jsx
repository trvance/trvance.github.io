import * as S from './HomePage.styles'
import { motion } from 'framer-motion'

import Me from '../../assets/Me.png'

import CSS from '../../assets/programmingIcons/CSS.png'
import HTML from '../../assets/programmingIcons/HTML.png'
import JS from '../../assets/programmingIcons/JS.png'
import React from '../../assets/programmingIcons/React.png'
import Node from '../../assets/programmingIcons/Node.png'
import Java from '../../assets/programmingIcons/Java.png'
import Python from '../../assets/programmingIcons/Python.png'


const HomePage = ({isPortrait}) => {
	return(
		<S.HomePage id='home' isPortrait={isPortrait}>
				{/* Name at top of page with animation wrapper */}
				<S.Name
					as={motion.h1} 
					initial={{opacity: 0,}} 
					animate={{opacity: 1,}} 
				>
					Tyler Vance
				</S.Name>

				{/* Catch Phrase */}
				<S.MottoImageContainer isPortrait={isPortrait}>
					<S.MottoText >
						<motion.div
							initial={{opacity: 0, y: '-50px'}} 
							animate={{opacity: 1, y: '0px'}} 
							transition={{delay: .5}}
						>
							<h2>Incredible<span>Developer</span></h2>
						</motion.div>
						<motion.div
							initial={{opacity: 0, y: '-50px'}} 
							animate={{opacity: 1, y: '0px'}} 
							transition={{delay: 1.5}}
						>
							<h2>Incredibler<span>Person</span></h2>
						</motion.div>
					</S.MottoText>

					{/* Image */}
					<S.Me
						src={Me} 
						as={motion.img} 
						initial={{opacity: 0}} 
						animate={{opacity: 1}} 
						isPortrait={isPortrait}
						// transition={{duration: .5, }}
					/>
				</S.MottoImageContainer>

			

			<S.IconsContainer isPortrait={isPortrait}>
				<S.IconContainer>
					<motion.img src={CSS} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={HTML} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .04, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={JS} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .08, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={React} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .12, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={Node} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .16, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={Java} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .2, }}/>
				</S.IconContainer>
				<S.IconContainer>
					<motion.img src={Python} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: .24, }}/>
				</S.IconContainer>
			</S.IconsContainer>
		</S.HomePage>
	)
}

export default HomePage