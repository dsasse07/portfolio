import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import backgroundGradient2 from './assets/backgroundGradient2.png'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fcfcfc;
  }
  body {
    background: rgb(191,254,212);
    background: linear-gradient(0deg, rgba(191,254,212,1) 4%, rgba(148,187,233,1) 100%);    /* background-image: url(${backgroundGradient2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: stretch; */
  }
`;

function App() {
  // const [ theme, setTheme ] = useState(lightTheme)
  const handleToggleTheme = () => {

  }
  return (
    <>
      {/* <ThemeProvider theme={theme} > */}
        <GlobalStyle />
        <Header onToggleTheme={handleToggleTheme}/>
        <About />
        <Projects />
        <Blogs />
        <Contact />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App;
