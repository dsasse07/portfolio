import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import PublishIcon from '@material-ui/icons/Publish';
import { useRef, useEffect, useState } from 'react'

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fcfcfc;
  }
  body {
    background: rgb(191,254,212);
    background: linear-gradient(0deg, rgba(191,254,212,1) 4%, rgba(148,187,233,1) 100%);
  }
`;

function App() {
  const topRef = useRef(null) 
  const scrollToRef = ref => window.scrollTo( {top: ref.current.offsetTop, behavior: "smooth"})   
  // const [ theme, setTheme ] = useState(lightTheme)
  const [ showButton, setShowButton ] = useState(false)

  useEffect( () => {
    window.addEventListener( "scroll", handleShowButton)
    return ( () => {
      window.removeEventListener( "scroll", handleShowButton)
    })
  }, [])

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
  }

  return (
    <>
      {/* <ThemeProvider theme={theme} > */}
        <GlobalStyle />
        <div id="top" ref={topRef}> </div>
        <Header onToggleTheme={handleToggleTheme} />
        <About />
        <Projects />
        <Blogs />
        <Contact />
        { showButton &&
        <GoToTop onClick={ 
          () => {
            scrollToRef(topRef)
            console.log(`topRef.current`, window.scrollY) 
        }}
        >  
          <PublishIcon />
        </GoToTop>
        }
      {/* </ThemeProvider> */}
    </>
  )
}

export default App;

const GoToTop = styled.button`
  position: fixed;
  bottom: 50px;
  right: 15px;
  background: #fc3796;
  color: white;
  border: 1px solid gray;
  height: 50px;
  width: 40px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 1px gray;
  cursor: pointer;
`