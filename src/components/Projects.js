import styled from 'styled-components'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <Container id="projects">
      <ProjectCard 
        title="Dronie"
        logo="https://i.imgur.com/s3wbqbY.png" 
        description="Developed as my capstone project for Flatiron School, it is a photo-sharing social media app for aerial photographers. It incorporates standard social media actions, a robust search feature, and real-time messaging."
        repoLink="https://github.com/dsasse07/Dronie" 
        url="dronie.netlify.app"
        demoVideo="https://youtu.be/jw2ofLvCGAY"
        technologies={["ReactJS", "Ionic", "Redux", "Cloudinary", "Rails API", "ActionCable"]}
      />
      <ProjectCard 
        title="Great Outdoors Guide"
        logo="https://i.imgur.com/rHRSUxY.png" 
        description="Developed as a pair-programming project in ReactJS. Connects to the National Parks Service and Google Maps APIs with a Rails API backend"
        repoLink="https://github.com/dsasse07/Great-Outdoors-Guide" 
        url="https://great-outdoors-guide.netlify.app/"
        demoVideo=""
        technologies={["ReactJS", "Styled-Components", "Cloudinary", "Rails API", "Google Maps", "NPS API"]}
      />
      <ProjectCard 
        title="Fludoku"
        logo="https://miro.medium.com/max/516/1*TStHCO5xf_9KQNvz0o8rmA.gif" 
        description="Developed as a pair-programming project in ReactJS. Connects to the National Parks Service and Google Maps APIs with a Rails API backend"
        repoLink="https://github.com/dsasse07/Fludoku" 
        url="https://fludoku.netlify.app/"
        demoVideo=""
        technologies={["vanillaJS", "Backtracking", "CSS GRID", "Rails API"]}
      />
      

    </Container>
  )
}

export default Projects

const Container = styled.div`
  border: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
`