import React from 'react'
import styled from 'styled-components'
import YouTubePlayer from 'react-player/youtube'

function YoutubeEmbed({ url }) {
  return (
    <Container>
      <ResponsivePlayer url={url} controls={true} height='100%' width='100%' />
    </Container>
  )
}

export default YoutubeEmbed

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`

const ResponsivePlayer = styled(YouTubePlayer)`
  height: 100%;
  width: 100%;
`
