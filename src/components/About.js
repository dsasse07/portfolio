import styled from 'styled-components'
import profilePhoto from '../assets/profilePic.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import devIcon from '../assets/devIcon.png'

function About() {
  
  return (
    <Container id="about">
      <PhotoContainer className="flex-item">
        <img src={profilePhoto} alt="Danny Sasse" />
      </PhotoContainer>
      <TextContainer className="flex-item" >
        <Greeting> 
          Hello!
        </Greeting>
        <Greeting>
          I'm Danny,
        </Greeting>
        <AboutMe> An enthusiastic Full Stack Software Developer with experience in React and Ruby on Rails. I am passionate about designing and optimizing innovative solutions to projects, and learning new technologies. </AboutMe>
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
        <ButtonBar>
          <Button href="https://docs.google.com/document/d/13qDrFQWZhHh7iyThX1FvDnUUeDEtRsfj_AjaB9V3Ino/edit?usp=sharing" target="_blank">
            SEE MY RESUME
          </Button>
        </ButtonBar>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 2rem; */
  align-items: center;
  padding: 1rem;
  .flex-item {
    margin: 1rem;
  }
`
const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;

  img {
    width: 100%;
  }
`
const TextContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  padding-top: 0;

  h1 {
    margin: 0;
  }
`

const Greeting = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding: 5px;
`
const AboutMe = styled.h3`
  font-weight: normal;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 0.7rem; */
  a {
    margin: 0.35rem;
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
`

const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`

const Button = styled.a`
  padding: 8px;
  background: ${(props) => props.theme.itemBackground};
  border: 1px solid ${(props) => props.theme.resumeBorder};
  box-shadow: ${(props) => props.theme.shadow};
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.resumeColor};
  font-weight: bold;
  font-size: 0.9rem;

  :hover{
    transform: scale(1.1);
  }
` 