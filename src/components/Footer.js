import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <Text>
        Built with React + custom Styled Components
      </Text>
      <Link href="https://github.com/dsasse07/portfolio" target="_blank" >
        View Source Code
      </Link>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
`

const Link = styled.a`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.logoName};
  
  :hover{
    text-decoration: underline;
  } 
`


