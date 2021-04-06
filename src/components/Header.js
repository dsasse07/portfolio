import styled from 'styled-components'

function Header() {
  return (
    <Head>
      Daniel Sasse
      <NavBar>
        <Button as="a" href="#about"> About </Button>
        <Button as="a" href="#projects"> Projects </Button>
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
  font-size: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`

const NavBar = styled.nav`
  display: flex; 
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Button = styled.button`
  display: block;
  background: none;
  border: 1px solid white;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.5rem;
`