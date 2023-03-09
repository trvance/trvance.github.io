import { useState } from 'react'
import * as S from './NavMenu.styles'
// import Tab from '../buttons/textButton/TextButton'
import Tab from './tab/Tab'
import { motion, useTransform, useScroll, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion'
import TextButton from '../buttons/textButton/TextButton'


const NavMenu = () => {
	const { scrollY, scrollYProgress } = useScroll()
	const height = useTransform(
		scrollY,
		// Map y from these values:
		[15, window.innerHeight],
		// Into these values:
		['15%', '100%']
	)
	
	
	const handleTabClick = (tab) => {
		switch(tab) {
			case 'Home':
				window.scrollTo({top: 0})
				break
			case 'Projects':
				window.scrollTo(0,300)
				break
		}
	}
	


	return(
		<S.NavMenu>
			{/* Scroll Indicator */}
			<S.SmallDisplay>
				<TextButton>=</TextButton>
			</S.SmallDisplay>

			<S.LargeDisplay>
				{/* <S.ScrollIndicatorContainer>
					<S.ScrollIndicator as={motion.div} style={{height: height}}/>
				</S.ScrollIndicatorContainer> */}

				{/* Tabs */}
				<S.TabsContainer>
					<Tab 
						href='#splash'
					>
						<motion.h2 
							initial={{opacity: 0, x: -100}} 
							animate={{opacity: 1, x: 0}}
						>
							Home
						</motion.h2>
					</Tab>
					<Tab 
						href='#projects'
					>
						<motion.h2 
							initial={{opacity: 0, x: -100}} 
							animate={{opacity: 1, x: 0}}
						>
							Projects
						</motion.h2>
					</Tab>
					<Tab 
						href='#about-me'
					>
						<motion.h2 
							initial={{opacity: 0, x: -100}} 
							animate={{opacity: 1, x: 0}}
						>
							About Me
						</motion.h2>
					</Tab>
				</S.TabsContainer>
			</S.LargeDisplay>

		</S.NavMenu>
	)
}

export default NavMenu