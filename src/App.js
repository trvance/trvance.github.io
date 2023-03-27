import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import * as S from './globalStyles'
import HomePage from './pages/homePage/HomePage'
import ProjectsPage from './pages/projectsPage/ProjectsPage'
import AboutMePage from './pages/aboutMePage/AboutMePage'
import NavMenu from './components/navMenu/desktopMenu/DesktopMenu'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import MenuButton from './components/buttons/menuButton/MenuButton'
import MobileMenu from './components/navMenu/mobileMenu/MobileMenu'



function App() {
  const [page, setPage] = useState(<HomePage />)
  const isPortrait = useMediaQuery({ orientation: 'portrait'})

  const handleSetPage = (tab) => {
    switch(tab) {
      case 'home':
        setPage(<HomePage isPortrait={isPortrait}/>)
        break
      case 'projects':
        setPage(<ProjectsPage isPortrait={isPortrait}/>)
        break
      case 'about':
        setPage(<AboutMePage isPortrait={isPortrait}/>)
        break
    }
  }

  return (
    <S.App isPortrait={isPortrait}>
      <S.GlobalStyle isPortrait={isPortrait}/>
      {
        isPortrait
        ?
        null
        :
        <S.NavContainer>
          <NavMenu page={page} setPage={handleSetPage} />
        </S.NavContainer>
      }

      <S.PageContainer isPortrait={isPortrait}>
        {page}
      </S.PageContainer>

      {
        isPortrait
        ?
        <MobileMenu page={page} setPage={handleSetPage} />
        :
        null
      }
    </S.App>
  );
}

export default App;
