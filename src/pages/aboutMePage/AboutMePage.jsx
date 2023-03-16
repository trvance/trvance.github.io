import * as S from './AboutMePage.styles'
import { motion } from 'framer-motion'


const AboutMePage = () => {
	return (
		<S.AboutMePage id='about-me'>
			<S.HeaderContainer>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
					<S.Title>Contact Me</S.Title>
				</motion.div>

				<motion.div initial={{y: '-40px', opacity: 0}} animate={{y: '0px', opacity: 1}} transition={{delay: .4}}>
					<S.SubHeader>Nice to meet <span>you</span>.</S.SubHeader>
				</motion.div>
			</S.HeaderContainer>

		</S.AboutMePage>
	)
}

export default AboutMePage