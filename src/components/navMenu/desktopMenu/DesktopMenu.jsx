import { useState } from 'react'
import * as S from './DesktopMenu.styles'
import Tab from './tab/Tab'
import HomeIcon from '../../../assets/navIcons/homefilled.png'
import ProjectsIcon from '../../../assets/navIcons/folder.png'
import AboutMeIcon from '../../../assets/navIcons/user.png'


const DesktopMenu = ({page, setPage}) => {
	const highlightColor = '#11998e'
	// const highlightColor = '#c4c4c4'
	// const highlightColor = '#000'
	const currentPage = page.type.name
	console.log(currentPage)

	return(
		<S.DesktopMenu>
			{/* Home Tab */}
			<Tab 
				icon={HomeIcon}
				isSelected={currentPage==='HomePage' ? true : false}
				fontColor={currentPage==='HomePage' ? highlightColor : '#393E41'}
				backgroundColor='#2F3437'
				onClick={() => setPage('home')}
			>
				Home
			</Tab>

			{/* Projects Tab */}
			<Tab 
				icon={ProjectsIcon}
				isSelected={currentPage==='ProjectsPage' ? true : false}
				fontColor={currentPage==='ProjectsPage' ? highlightColor : '#2F3437'}
				backgroundColor='#393E41'
				onClick={() => setPage('projects')}
			>
				Projects
			</Tab>

			{/* About Me Tab */}
			<Tab 
				icon={AboutMeIcon}
				isSelected={currentPage==='AboutMePage' ? true : false}
				fontColor={currentPage==='AboutMePage' ? highlightColor : '#393E41'}
				backgroundColor='#2F3437'
				onClick={() => setPage('about')}
			>
				About Me
			</Tab>
		</S.DesktopMenu>
	)
}

export default DesktopMenu