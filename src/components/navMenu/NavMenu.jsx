import { useState } from 'react'
import * as S from './NavMenu.styles'
import Tab from './tab/Tab'


const NavMenu = ({page, setPage}) => {
	// const highlightColor = '#339989'
	const highlightColor = '#11998e'
	const currentPage = page.type.name
	console.log(currentPage)

	return(
		<S.NavMenu>
			{/* Home Tab */}
			<Tab 
				fontColor={currentPage==='SplashPage' ? highlightColor : '#393E41'}
				backgroundColor='#2F3437'
				onClick={() => setPage('home')}
			>
				Home
			</Tab>

			{/* Projects Tab */}
			<Tab 
				fontColor={currentPage==='ProjectsPage' ? highlightColor : '#2F3437'}
				backgroundColor='#393E41'
				onClick={() => setPage('projects')}
			>
				Projects
			</Tab>

			{/* About Me Tab */}
			<Tab 
				fontColor={currentPage==='AboutMePage' ? highlightColor : '#393E41'}
				backgroundColor='#2F3437'
				onClick={() => setPage('aboutMe')}
			>
				Contact Me
			</Tab>
		</S.NavMenu>
	)
}

export default NavMenu