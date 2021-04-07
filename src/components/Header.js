import styled from 'styled-components'

function Header() {
  return (
    <Head>
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
  /* position: fixed; */
  display: flex;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
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
    color: #686a6b;
`
const Name = styled.span`
  font-family: "Agustina Regular";
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color: #1E357D;
`

const NavBar = styled.nav`
  display: flex; 
  flex-wrap: wrap;
  gap: 1rem;
`

const Button = styled.button`
  background: white;
  border: 1px solid white;
  color: black;
  display: block;
  font-size: 1.1rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s;
  box-shadow: 1px 2px 6px 1px gray;

  :hover {
    background: #A8EFDD;
  }
`
