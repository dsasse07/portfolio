import styled from 'styled-components'
import ThemeToggler from './ThemeToggler'

function Header({onToggleTheme}) {
  return (
    <Head>
      <TogglerContainer>
        <ThemeToggler onToggleTheme={onToggleTheme}/>
      </TogglerContainer>
      <Signature href="/" className="logo">
        <AngleBracket className="grey-color"> &lt;</AngleBracket>
        <Name className="logo-name">Daniel Sasse</Name>
        <AngleBracket className="grey-color">/&gt;</AngleBracket>
      </Signature>
      <NavBar>
        <Button as="a" href="#projects"> 
          Projects
        </Button>
        <Button as="a" href="#blogs"> Writing </Button>
        <Button as="a" href="#contact"> Contact </Button>
      </NavBar>
    </Head>
  )
}

export default Header

const Head = styled.header`
  position: relative;
  display: flex;
  margin: 1rem;
  padding: 1rem;
  padding-top: 50px;
  font-size: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const TogglerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;  
`

const Signature = styled.a`
  display: block;
  flex: none;
  float: left;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
`
const AngleBracket = styled.span`
    color: ${(props) => props.theme.logoAngles};
`
const Name = styled.span`
  font-family: "Agustina Regular";
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color:  ${(props) => props.theme.logoName};
`

const NavBar = styled.nav`
  display: flex; 
  flex-wrap: wrap;
  /* gap: 1rem; */
  justify-content: center;

  a {
    margin: 0.5rem;
  }
`

const Button = styled.button`
  background: ${(props) => props.theme.itemBackground};
  border: 1px solid white;
  color: ${(props) => props.theme.fontColor};
  display: block;
  font-size: 1.1rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s;
  box-shadow: ${(props) => props.theme.shadow};

  :hover {
    background: ${(props) => props.theme.hoverColor};
  }
`
