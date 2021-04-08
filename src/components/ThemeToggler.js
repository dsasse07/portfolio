import styled from 'styled-components'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

function ThemeToggler({onToggleTheme}) {
  return (
    <OuterContainer onClick={onToggleTheme} >
      <WbSunnyIcon />
      <NightsStayIcon />
      <Slider/>
    </OuterContainer>
  )
}

export default ThemeToggler

const OuterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.logoName};
  border-radius: 20px;
  gap: 4px;
  padding: 2px;
  padding-left: 3px;
  padding-right: 2px;

  svg{
    height: 25px;
    width: 25px;
    color: ${(props) => props.theme.fontColor};
  }
`

const Slider = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => props.theme.sliderLeft};
  background: ${(props) => props.theme.logoName};
  height: 24px;
  width: 24px;
  border-radius: 50%;
  transition: 0.4s;
`