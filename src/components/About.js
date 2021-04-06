import styled from 'styled-components'
import profilePhoto from '../assets/profilePic.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import devIcon from '../assets/devIcon.png'
function About() {
  return (
    <Container id="about">
      <PhotoContainer>
        <img src={profilePhoto} alt="Danny Sasse" />
      </PhotoContainer>
      <TextContainer>
        <Greeting> Hello! I'm Danny,</Greeting>
        <AboutMe> An enthusiastic Full Stack Software Developer with experience in React and Ruby on Rails. I am passionate about designing and optimizing innovative solutions to projects, and learning new technologies. </AboutMe>
        <SocialLinks>
          <LogoLink background="black" href="https://github.com/dsasse07" target="_blank">
            <GitHubIcon style={{color: "#FFFFFF"}} fontSize="medium"/>
          </LogoLink >
          <LogoLink background="#0E65C2" href="https://www.linkedin.com/in/danny-sasse/" target="_blank">
            <LinkedInIcon style={{color: "#FFFFFF"}} fontSize="medium" />
          </LogoLink>
          <LogoLink background="#1EA2F1" href="https://twitter.com/dannysasse" target="_blank">
            <TwitterIcon style={{color: "#FFFFFF"}} fontSize="medium" />
          </LogoLink>
          <LogoLink background="black" href="https://dev.to/dsasse07" target="_blank" >
            <img src={devIcon} alt="Dev.to" />
          </LogoLink>
        </SocialLinks>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.section`
  border: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`
const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`
const TextContainer = styled.div`
  border: 2px solid blue;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`

const Greeting = styled.h1`
  text-align: center;
`
const AboutMe = styled.h3`
  font-weight: normal;
  text-align: center;
`

const SocialLinks = styled.div`
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

  img{
    width: 80%;
  }

  :hover{
    transform: scale(1.1);
  }

  :hover ~ a {
    opacity: 30%;
  }
`