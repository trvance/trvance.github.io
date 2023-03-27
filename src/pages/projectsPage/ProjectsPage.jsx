import * as Projects from '../../myProjects/MyProjects'

import { motion } from 'framer-motion'

import * as S from './ProjectsPage.styles'
import LeftProject from './project/LeftProject'
import RightProject from './project/RightProject'


const ProjectsPage = ({isPortrait}) => {
	return(
		<S.ProjectsPage id='projects' isPortrait={isPortrait}>
			<S.HeaderContainer>
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
					<S.Title>Projects</S.Title>
				</motion.div>
				<motion.div initial={{y: '-40px', opacity: 0}} animate={{y: '0px', opacity: 1}} transition={{delay: .5}}>
					<S.SubHeader>A little bit of <span>this</span>.</S.SubHeader>
				</motion.div>
				<motion.div initial={{y: '-40px', opacity: 0}} animate={{y: '0px', opacity: 1}} transition={{delay: 1.5}}>
					<S.SubHeader>A little bit of <span>that</span>.</S.SubHeader>
				</motion.div>
			</S.HeaderContainer>

			<motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
				<S.ProjectsContainer >
					{/* Auto Scheduler */}
					<LeftProject isPortrait={isPortrait} project={Projects.AutoScheduler} />

					{/* Kimmi Quiz */}
					<RightProject isPortrait={isPortrait} project={Projects.KimmiKuiz} />

					{/* Typing Speed Test */}
					<LeftProject isPortrait={isPortrait} project={Projects.TypingTest} />

					{/* Ocufly */}
					<RightProject isPortrait={isPortrait} project={Projects.Ocufly} />

					{/* Wine Classification */}
					<LeftProject isPortrait={isPortrait} project={Projects.WineClassification} />

					{/* Steganography */}
					<RightProject isPortrait={isPortrait} project={Projects.Steganography} />
				</S.ProjectsContainer>
			</motion.div>
		</S.ProjectsPage>
	)
}

export default ProjectsPage