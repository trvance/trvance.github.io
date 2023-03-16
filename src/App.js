import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import * as S from './globalStyles'
import SplashPage from './pages/splashPage/SplashPage'
import ProjectsPage from './pages/projectsPage/ProjectsPage'
import AboutMePage from './pages/aboutMePage/AboutMePage'
import NavMenu from './components/navMenu/NavMenu'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'



function App() {
  const [page, setPage] = useState(<SplashPage />)
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isMobile = useMediaQuery({ maxWidth: 1224})
  const isPortrait = useMediaQuery({ orientation: 'portrait'})

  const handleSetPage = (tab) => {
    switch(tab) {
      case 'home':
        setPage(<SplashPage />)
        break
      case 'projects':
        setPage(<ProjectsPage />)
        break
      case 'aboutMe':
        setPage(<AboutMePage />)
        break
    }
  }

  return (
    <S.App>
      <S.GlobalStyle />
      {/* <S.NavContainer> */}
      {
        isPortrait
        ?
        null
        :
        <NavMenu page={page} setPage={handleSetPage} />
      }
      {/* </S.NavContainer> */}

      <S.PageContainer>
        {page}
      </S.PageContainer>
    </S.App>
  );
}

export default App;
