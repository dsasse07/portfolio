import styled from 'styled-components'
import { useState } from 'react'
import devIcon from '../assets/devIcon.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

function BlogCard({ article }) {
  const { title, date, url, image } = article
  const [showLink, setShowLink] = useState(false)
  let timer

  function handleShowLink() {
    timer = setTimeout(() => {
      setShowLink(true)
    }, 200)
  }
  function handleHideLink() {
    setShowLink(false)
    clearTimeout(timer)
  }

  return (
    <Card
      className='flex-item'
      onMouseEnter={handleShowLink}
      onMouseLeave={handleHideLink}
    >
      <LinkButton className='link' href={url} target='_blank' rel='noreferrer'>
        <img src={devIcon} alt='Dev.to logo' />
        <IconContainer showLink={showLink}>
          <ArrowIcon />
        </IconContainer>
      </LinkButton>
      <Row>
        <LogoContainer>
          <Logo src={image} alt={`${title}`} />
        </LogoContainer>
      </Row>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>
        <PubDate>{date}</PubDate>
      </Row>
    </Card>
  )
}

export default BlogCard

const Card = styled.article`
  position: relative;
  background: ${(props) => props.theme.itemBackground};
  width: 100%;
  max-width: 500px;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
  overflow: hidden;

  :hover .link {
    width: 100px;
    height: 75px;

    img {
      right: 30px;
      top: 20px;
    }
    div {
      top: 21px;
    }
  }
`
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Logo = styled.img`
  width: 100%;
  object-fit: contain;
  border: 1px solid black;
`
const Title = styled.header`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: 6px;
  padding: 0;
  margin-bottom: 0.4rem;
`

const PubDate = styled.span`
  font-size: 0.8rem;
`

const LinkButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 50px;
  height: 40px;
  text-decoration: none;
  background: black;
  border-radius: 0 0 0 80px;
  padding: 5px;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;

  img {
    position: absolute;
    width: 40px;
    top: 6px;
    right: 8px;
    transition: 0.2s;
  }
`

const IconContainer = styled.div`
  transition: 0.2s;
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: ${({ showLink }) => (showLink ? '100%' : '0')};
`

const ArrowIcon = styled(ArrowForwardIcon)`
  color: white;
`
