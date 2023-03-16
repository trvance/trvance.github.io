import * as S from './SplashPage.styles'
import { motion } from 'framer-motion'

import Me from '../../assets/Me.png'

import CSS from '../../assets/programmingIcons/CSS.png'
import HTML from '../../assets/programmingIcons/HTML.png'
import JS from '../../assets/programmingIcons/JS.png'
import React from '../../assets/programmingIcons/React.png'
import Node from '../../assets/programmingIcons/Node.png'
import Java from '../../assets/programmingIcons/Java.png'
import Python from '../../assets/programmingIcons/Python.png'


const SplashPage = () => {
	return(
		<S.SplashPage>
			{/* Catch Phrase */}
			<S.OverlappingText as={motion.div} initial={{opacity: 0, y: '25px'}} animate={{opacity: 1, y: '0px'}} transition={{delay: 1, duration: .5}}>
				<h2>Incredible<span>Developer</span></h2>
				<h2>Incredibler<span>Person</span></h2>
			</S.OverlappingText>

			<S.MeSmallDisplay 
				src={Me} 
				as={motion.img} 
				initial={{opacity: 0}} 
				animate={{opacity: 1}} 
				// transition={{duration: .5, }}
			/>

			{/* Name and Picture Row */}
			<S.MainContainer>
				{/* Tyler */}
				<S.FirstName 
					as={motion.h1} 
					initial={{opacity: 0, x: '-50px'}} 
					animate={{opacity: 1, x: '0px'}} 
					// transition={{duration: .5, delay: 1}}
				>
					Tyler
				</S.FirstName>

				{/* Image */}
				<S.MeLargeDisplay 
					src={Me} 
					as={motion.img} 
					initial={{opacity: 0}} 
					animate={{opacity: 1}} 
					// transition={{duration: .5, }}
				/>

				{/* Vance */}
				<S.LastName 
					as={motion.h1} 
					initial={{opacity: 0, x: '50px'}} 
					animate={{opacity: 1, x: '0px'}} 
					// transition={{duration: .5, delay: 1}}
				>
					Vance
				</S.LastName>
			</S.MainContainer>

			

			<S.IconsContainer>
				<motion.img src={CSS} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.15}}/>
				<motion.img src={HTML} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.1}}/>
				<motion.img src={JS} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.05}}/>
				<motion.img src={React} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1}}/>
				<motion.img src={Node} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.05}}/>
				<motion.img src={Java} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.1}}/>
				<motion.img src={Python} initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.15}}/>
			</S.IconsContainer>
		</S.SplashPage>
	)
}

export default SplashPage