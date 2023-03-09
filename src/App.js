import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import * as S from './globalStyles'
import SplashPage from './pages/splashPage/SplashPage'
import ProjectsPage from './pages/projectsPage/ProjectsPage'
import AboutMePage from './pages/aboutMePage/AboutMePage'
import NavMenu from './components/navMenu/NavMenu'


function App() {


  return (
    <S.App>
      <S.GlobalStyle />
      <NavMenu />
      
      <SplashPage />
      <ProjectsPage />
      <AboutMePage />
    </S.App>
  );
}

export default App;
