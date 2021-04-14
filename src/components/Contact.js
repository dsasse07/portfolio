import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import devIcon from '../assets/devIcon.png'
import mediumIcon from '../assets/mediumIcon.svg'

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
            <LogoLink aria-label="Danny Sasse's Github" background="black" href="https://github.com/dsasse07" target="_blank" rel="noreferrer">
              <GitHubIcon style={{color: "#FFFFFF"}} />
              <span> GitHub </span>
            </LogoLink >
            <LogoLink aria-label="Danny Sasse's LinkedIn" background="#0E65C2" href="https://www.linkedin.com/in/danny-sasse/" target="_blank" rel="noreferrer">
              <LinkedInIcon style={{color: "#FFFFFF"}}  />
              <span> LinkedIn </span>
            </LogoLink>
            <LogoLink aria-label="Danny Sasse's Aerial Photography Portfolio" background="#F64E4D" href="https://www.instagram.com/dsasse.imaging/" target="_blank" rel="noreferrer">
              <InstagramIcon style={{color: "#FFFFFF"}}  />
              <span> Instagram </span>
            </LogoLink>
            <LogoLink aria-label="Danny Sasse's Twitter" background="#1EA2F1" href="https://twitter.com/dannysasse" target="_blank" rel="noreferrer">
              <TwitterIcon style={{color: "#FFFFFF"}}  />
              <span> Twitter </span>
            </LogoLink>
            <LogoLink aria-label="Danny Sasse's Dev.to Blog" background="black" href="https://dev.to/dsasse07" target="_blank" rel="noreferrer" >
              <img src={devIcon} alt="Dev.to" />
              <span> Dev Blog </span>
            </LogoLink>
            <LogoLink aria-label="Danny Sasse's Medium Blog" background="white" href="https://dev.to/dsasse07" target="_blank" rel="noreferrer" >
              <img src={mediumIcon} alt="Dev.to" />
              <span> Medium Blog </span>
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
  min-height: 50vh;

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
  box-shadow: ${(props) => props.theme.shadow};

  img{
    width: 80%;
  }

  :hover{
    transform: scale(1.2);
  }

  span {
    display: none;
  }
`