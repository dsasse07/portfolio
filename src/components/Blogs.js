import styled from 'styled-components'
import BlogCard from './BlogCard'

function Blogs() {

  return (
    <Container id="blogs">
      <BlogCard
        title="Conditional Function Invocation without Conditional Statements in JS"
        date="Published: Mar 7 2021"
        url="https://dev.to/dsasse07/conditional-function-invocation-without-conditional-statements-in-js-3lld"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--IdO7OX3Q--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r7ehunoosjdt7yyynxku.jpeg"
      />
      <BlogCard
        title="Generating & Solving Sudoku in JS & Ruby with Backtracking"
        date="Published: Fed 17 2021"
        url="https://dev.to/dsasse07/generating-solving-sudoku-in-js-ruby-with-backtracking-4hm"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--eojm204F--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5qyp2rq2orons4pf7du.gif"
      />
      <BlogCard
        title="Refactoring App Features into Modules in Ruby"
        date="Published: Jan 20 2021"
        url="https://dev.to/dsasse07/refactoring-app-features-into-modules-in-ruby-1k4c"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--cZ1jefog--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y0jt02p9rvzjhi0nt45w.jpeg"
      />
      <BlogCard
        title="Sending SMS Text from a Ruby App"
        date="Published: Jan 15 2021"
        url="https://dev.to/dsasse07/sending-sms-text-from-a-ruby-app-cje"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--e71AhWsW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/qzlr27bdnxrjuelw39ws.jpeg"
      />
      <BlogCard
        title="Abstraction & refactoring with .send in Ruby"
        date="Published: Dec 30 2020"
        url="https://dev.to/dsasse07/til-abstraction-refactoring-with-send-in-ruby-1phe"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--tcrtKP8R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w8aigsu86tlxpgyc89ci.jpeg"
      />
    </Container>
  )
}

export default Blogs

const Container = styled.div`
  border: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
`