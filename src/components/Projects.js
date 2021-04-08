import styled from 'styled-components'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <Container id="projects">
      <Heading>
        <SectionHeading>
          Tech Projects
        </SectionHeading>
        <Description>
          Recent projects utilizing different technologies. Flip each card for a demo!
        </Description>
      </Heading>
      <ProjectCard 
        title="Dronie"
        logo="https://i.imgur.com/s3wbqbY.png" 
        description="Developed as my capstone project for Flatiron School, it is a photo-sharing social media app for aerial photographers. It incorporates standard social media actions, a robust search feature, and real-time messaging."
        repoLink="https://github.com/dsasse07/Dronie" 
        url="dronie.netlify.app"
        demoVideo="https://youtu.be/CUclDYx6XKo"
        embedId="CUclDYx6XKo"
        technologies={["ReactJS", "Ionic", "Redux", "Cloudinary", "Rails API", "ActionCable"]}
      />
      <ProjectCard 
        title="Outdoors Guide"
        logo="https://i.imgur.com/rHRSUxY.png" 
        description="Developed as a pair-programming project in ReactJS. Connects to the National Parks Service and Google Maps APIs with a Rails API backend"
        repoLink="https://github.com/dsasse07/Great-Outdoors-Guide" 
        url="https://great-outdoors-guide.netlify.app/"
        demoVideo="https://youtu.be/nJc98KqjqLQ"
        embedId="nJc98KqjqLQ"
        technologies={["ReactJS", "Styled-Components", "Rails API", "Google Maps", "NPS API"]}
      />
      <ProjectCard 
        title="Fludoku"
        logo="https://miro.medium.com/max/516/1*TStHCO5xf_9KQNvz0o8rmA.gif" 
        description="A Sudoku web-app that uses a custom backtracking algorithm to create Sudoku of user-defined difficulty, that have unique solutions."
        repoLink="https://github.com/dsasse07/Fludoku" 
        url="https://fludoku.netlify.app/"
        demoVideo="https://youtu.be/3SA975NHH00"
        embedId="3SA975NHH00"
        technologies={["vanillaJS", "Backtracking", "CSS GRID", "Rails API"]}
      />
      <ProjectCard 
        title="Family Organizer"
        logo="https://i.imgur.com/PmCMSXC.png" 
        description="A Ruby on Rails application utilizing the MVC framework and a PostgreSQL database. ActiveStorage is utilized for user uploads and storage"
        repoLink="https://github.com/dsasse07/Family-Organizer" 
        url={null}
        demoVideo="https://youtu.be/7hwDpslkDH8"
        embedId="7hwDpslkDH8"
        technologies={["Ruby", "Ruby on Rails", "PostgreSQL", "ActiveStorage"]}
      />
      <ProjectCard 
        title="Subscription Tracker"
        logo="https://i.imgur.com/XgdJDPr.png" 
        description="Ruby CLI application developed using ActiveRecord and SQLite3 for creating reminders for subscription services and syncing those reminders to calendar applications through the creation of .ics files."
        repoLink="https://github.com/simonjacobs212/subscription-tracker" 
        url={null}
        demoVideo="https://youtu.be/PtoSdk4yNIY"
        embedId="PtoSdk4yNIY"
        technologies={["Ruby", "ActiveRecord", "SQLite3", "FileIO"]}
      />
      
      
    </Container>
  )
}

export default Projects

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 2rem; */
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  
  .flex-item{
    margin: 1rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  width: 100%;
  padding: 20px;
  
  h2, h4 {
    margin: 0.5rem;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const Description = styled.h4`  
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: normal;
`