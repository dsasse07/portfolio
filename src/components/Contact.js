import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import devIcon from '../assets/devIcon.png'

function Contact() {
  return (
    <Container id="contact" >
        <Heading>
          <SectionHeading>
            Contact Me:
          </SectionHeading>
        </Heading>
        <Col>
          <DescriptionText>
            Discuss a project? Just say hi? 
          </DescriptionText>
          <DescriptionText>
            My Inbox is open!
          </DescriptionText>
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
            <LogoLink background="#F64E4D" href="https://www.instagram.com/dsasse.imaging/" target="_blank">
              <InstagramIcon style={{color: "#FFFFFF"}}  />
            </LogoLink>
            <LogoLink background="#1EA2F1" href="https://twitter.com/dannysasse" target="_blank">
              <TwitterIcon style={{color: "#FFFFFF"}}  />
            </LogoLink>
            <LogoLink background="black" href="https://dev.to/dsasse07" target="_blank" >
              <img src={devIcon} alt="Dev.to" />
            </LogoLink>
          </SocialLinks>
        </Col>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const DescriptionText = styled.p`
  font-size: 1.3rem;
  margin: 5px;
`

const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.logoName};
  margin-top: 10px;

  :hover{
    text-decoration: underline;
  }
`

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-left: 0.35rem;
    margin-right: 0.35rem;
    margin-bottom: 0.35rem;
  }
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