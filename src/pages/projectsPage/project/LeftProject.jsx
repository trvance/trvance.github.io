import * as S from './LeftProject.styles'
import Slideshow from '../../../components/slideshow/Slideshow'
import { motion } from 'framer-motion'


const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'


const LeftProject = ({project}) => {
	return (
		<S.LeftProject>
			<S.HeaderContainer>
				{/* Project Images Scroller */}
				<Slideshow color={project.color} images={project.images}/>

				{/* Programming Icons */}
				<S.IconContainer>
					{project.programmingIcons.map((url, index) => (
						<S.Icon key={index} src={url} />
					))}
				</S.IconContainer>
				
			</S.HeaderContainer>
					
			{/* Project Title and Description */}
			<S.TextContainer color={project.color}>
				<motion.div initial={{y: '25px', opacity: 0}} animate={{y: '0px', opacity: 1}} transition={{delay: .2}}>
					<S.Title>{project.title}</S.Title>
				</motion.div>
				<S.Divider color={project.color}/>
				<p>{project.description}</p>
			</S.TextContainer>
		</S.LeftProject>
	)
}

export default LeftProject