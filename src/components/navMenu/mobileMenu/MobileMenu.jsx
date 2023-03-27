import * as S from './MobileMenu.styles'
import Tab from './tab/Tab'
import { motion } from 'framer-motion'
import HomeIcon from '../../../assets/navIcons/homefilled.png'
import ProjectsIcon from '../../../assets/navIcons/folder.png'
import MailIcon from '../../../assets/navIcons/email.png'
import SmartphoneIcon from '../../../assets/navIcons/smartphone.png'
import AboutMeIcon from '../../../assets/navIcons/user.png'



const MobileMenu = ({page, setPage}) => {
	const currentPage = page.type.name

	return (
		<S.MobileMenu>
			<motion.div initial={{y: '25px', opacity: 0}} animate={{y: '0px', opacity: 1}}>
				<Tab 
					selected={currentPage === 'HomePage'} 
					onClick={() => setPage('home')} 
					icon={HomeIcon}
				>
					Home
				</Tab>
			</motion.div>
			<motion.div initial={{y: '25px', opacity: 0}} animate={{y: '0px', opacity: 1}}>
				<Tab 
					selected={currentPage === 'ProjectsPage'} 
					onClick={() => setPage('projects')} 
					icon={ProjectsIcon}
				>
					Projects
				</Tab>
			</motion.div>
			<motion.div initial={{y: '25px', opacity: 0}} animate={{y: '0px', opacity: 1}}>
				<Tab 
					selected={currentPage === 'AboutMePage'} 
					onClick={() => setPage('about')} 
					icon={AboutMeIcon}
				>
					About Me
				</Tab>
			</motion.div>
		</S.MobileMenu>
	)
}

export default MobileMenu