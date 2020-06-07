import styled from 'styled-components'

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -16px 0 0 -16px;
  border-radius: 3px;
  z-index: 99999;
  background-image: url(${require('../../assets/images/player.png')});
  background-position: -5px -5px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 10px #fff;
  }
`