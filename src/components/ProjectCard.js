import styled from 'styled-components'
import { useState } from 'react'
// import { useBreakpoint } from './BreakpointProvider'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubeEmbed from './YoutubeEmbed'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ProjectCard({title, logo, technologies, description, repoLink, url, demoVideo, embedId}) {
  const [ showDescription, setShowDescription ] = useState(false)
  const [ showVideo, setShowVideo ] = useState(false)
  // const breakpoints = useBreakpoint()

  function toggleMode(){
    setShowVideo( showVideo => !showVideo )
  }

  const techTagComponents = technologies.map( (tech, index) => {
    return (
      <TechTag key={index}>
        {tech}
      </TechTag>
    )
  })

    return (
      <Card className="flex-item">
        <VideoButton className="link" showVideo={showVideo} onClick={toggleMode}>
          {showVideo ? 
            <InfoOutlinedIcon style={{color: "white"}} />
          :
            <YouTubeIcon style={{color: "white"}} />
          }
        </VideoButton>
        
        { showVideo ?
          <YoutubeEmbed embedId={embedId} />
        :
          <>
            <Row>
              <LogoContainer>
                <Logo src={logo} alt={ `${title} logo`} />
              </LogoContainer>
              <Column>
                <Title>
                  {title}
                </Title>
                <LinkRow>
                  { url && 
                    <LinkButton href={url} target="_blank" >
                      <LinkIcon />
                    </LinkButton>
                  }
                  <LinkButton href={repoLink} target="_blank" >
                    <GitHubIcon />
                  </LinkButton>
                </LinkRow>
              </Column>
            </Row>
            <TechnologyContainer>
              {techTagComponents}
            </TechnologyContainer>
            <Row>
              <Description open={showDescription}>
                {description}
              </Description>
            </Row>
            <ExpandButton onClick={() => setShowDescription(showDescription => !showDescription) }>
              <DownArrow open={showDescription}/>
              {showDescription ? "Close" : "Description" }
              <DownArrow open={showDescription}/>
            </ExpandButton>
          </>
        }
      </Card>
    )

}

export default ProjectCard

const Card = styled.article`
  position: relative;
  background: ${(props) => props.theme.itemBackground};
  width: 100%;
  max-width: 500px;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
  overflow: hidden;

  :hover .link {
    width: 60px;
    height: 60px;

    svg {
      top: 10px;
      right: 5px;
    }
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
const LinkRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 5px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  min-width: 180px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.img`
  width: 20vw;
  height: 20vw;
  max-width: 150px;
  max-height: 150px;
`
const Title = styled.header`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  margin-bottom: 0.4rem;

  :first-of-type{
    font-size: 1.5rem;
  }
`
const LinkButton = styled.a`
  display: flex;
  text-decoration: none;
  background: white;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid black;
  transition: 0.2s;
  box-shadow: ${(props) => props.theme.shadow};
  
  svg {
    transition: 0.2s;
    color: black;
  }

  :hover{
    background: black;
    svg{
      color: white;
    }
  }
`

const TechnologyContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:0.5rem;

  span {
    margin: 0.1rem;
  }
`
const TechTag = styled.span`
  border: 1px solid ${(props) => props.theme.logoName};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.hoverColor};
  padding: 0.2rem;
  font-size: 0.8rem;
`

const ExpandButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.2s;
  font-size: 0.7rem;
  color: ${(props) => props.theme.fontColor};
  :hover {
    background: #dbdbdb;
  }
`

const Description = styled.summary`
  max-height: ${ props => props.open ? "110px" : "0" };
  transition: 0.5s;
  overflow: hidden;
  text-align: center;
  padding-top: 0.5rem;
`

const DownArrow = styled(KeyboardArrowDownIcon)`
  transform: ${ props => props.open ? "rotateX(180deg)" : "rotateX(0deg)" };
`


const VideoButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 30px;
  height: 30px;
  text-decoration: none;
  background: ${({showVideo}) => showVideo ? "black" : "#FF0102" };
  border-radius: 0 0 0 80px;
  padding: 5px;
  border-left: 1px solid ${(props) => props.theme.itemBackground};
  border-bottom: 1px solid ${(props) => props.theme.itemBackground};
  transition: all 0.3s;
  cursor: pointer;
  opacity: ${({showVideo}) => showVideo ? "70%" : "100%" };
  z-index: 2;

  svg {
    position: absolute;
    width: 40px;
    top: 4px;
    right: -2px;
    transition: 0.2s;
  }
`
