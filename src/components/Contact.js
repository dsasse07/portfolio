import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import devIcon from '../assets/devIcon.png'

function Contact() {
  return (
    <Container id="contact" >
      <Row>
        <Col>
          <SectionHeading>
            Contact Me:
          </SectionHeading>
        </Col>
        <Col>
          <DescriptionText>
            Discuss a project? Just say hi? 
          </DescriptionText>
          <DescriptionText>
            My Inbox is open!
          </DescriptionText>
          <LinkText href="tel:(609) 433 2308" >
            { "(609) 433 2308" }
          </LinkText>
          <LinkText href="mailto: dsasse07@gmail.com">
            dsasse07@gmail.com
          </LinkText>
          <SocialLinks className="social">
            <LogoLink background="black" href="https://github.com/dsasse07" target="_blank">
              <GitHubIcon style={{color: "#FFFFFF"}} />
            </LogoLink >
            <LogoLink background="#0E65C2" href="https://www.linkedin.com/in/danny-sasse/" target="_blank">
              <LinkedInIcon style={{color: "#FFFFFF"}}  />
            </LogoLink>
            <LogoLink background="#1EA2F1" href="https://twitter.com/dannysasse" target="_blank">
              <TwitterIcon style={{color: "#FFFFFF"}}  />
            </LogoLink>
            <LogoLink background="black" href="https://dev.to/dsasse07" target="_blank" >
              <img src={devIcon} alt="Dev.to" />
            </LogoLink>
          </SocialLinks>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px){
    align-items: flex-end;
  }

  :last-of-type{
    flex-grow: 2;
    align-items: center;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
`
const DescriptionText = styled.p`
  font-size: 1.3rem;
  margin: 5px;
`

const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  margin-top: 10px;

  :hover{
    color: blue;
  }
`

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`
const LogoLink = styled.a`
  display: flex;
  border-radius: 50%;
  background: ${({background}) => background };
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s;
  img{
    width: 80%;
  }

  :hover{
    transform: scale(1.2);
  }
`