import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PublishIcon from '@material-ui/icons/Publish';
import { useRef, useState, useEffect } from 'react'
import { useBreakpoint } from './components/BreakpointProvider'
import { lightTheme, darkTheme } from './theme/themes.js'

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fcfcfc;
    --palegreen:#A8EFDD;
    --darkblue:#1E357D;
    --gray: #686a6b;
    --yellow: #ffde3d;
    --twitterBlue: #1CA3F1;
    --slate: #2f3538;
    --burntred: #2C0F0D;
    --burntyellow: #e09900;
    --pink: #FC3795
  }
  body {
    background: ${(props) => props.theme.background};
    background: ${(props) => props.theme.gradient};
    font-family: 'Comfortaa', cursive;
    color: ${(props) => props.theme.fontColor};
    transition: all 0.2s;
  }
`;





function App() {
  const topRef = useRef(null) 
  const scrollToRef = ref => window.scrollTo( {top: ref.current.offsetTop, behavior: "smooth"})   
  const [ showButton, setShowButton ] = useState(false)
  const breakpoints = useBreakpoint()
  const [ theme, setTheme ] = useState(breakpoints.dark===true ? darkTheme : lightTheme )
  window.addEventListener( "scroll", handleShowButton)

  useEffect( () => {
    setTheme( breakpoints.dark === true ? darkTheme : lightTheme )
  }, [breakpoints.dark])

  function handleShowButton(){
    if (window.scrollY > 200 && !showButton) {
      setShowButton(true)
      return
    }
    if (window.scrollY <= 200 && !showButton){
      setShowButton(false)
      return
    }
  }

  const handleToggleTheme = () => {
    setTheme( theme => theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <div id="top" ref={topRef}> </div>
        <Header onToggleTheme={handleToggleTheme} />
        <About />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
        { showButton &&
          <GoToTop onClick={ () => scrollToRef(topRef) } >  
            <PublishIcon />
          </GoToTop>
        }
      </ThemeProvider>
    </>
  )
}

export default App;

const GoToTop = styled.button`
  position: fixed;
  bottom: 50px;
  left: 15px;
  background: ${(props) => props.theme.topButton};
  color: white;
  border: 1px solid gray;
  height: 50px;
  width: 40px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
`
