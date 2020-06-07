import styled from 'styled-components'
import { LayerProps, TileProps } from './types'

const normalizeMarginLayer = ({ screen }: LayerProps) => {
  const width  = screen.width * screen.tileSize
  const height  = screen.height * screen.tileSize

  return `-${height / 2}px 0 0 -${width / 2}px`
}

export const Squad = styled.div`
  width: ${({ screen }: LayerProps) => screen.width * screen.tileSize }px;
  height: ${({ screen }: LayerProps) => screen.height * screen.tileSize }px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: ${normalizeMarginLayer};
  background-color: gray;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;
`

export const Layer = styled.div`
  width: ${({ screen }: LayerProps) => screen.width * screen.tileSize }px;
  height: ${({ screen }: LayerProps) => screen.height * screen.tileSize }px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: ${normalizeMarginLayer};
`

const normalizeTilePosition = ({ value }: TileProps) => {
  switch (value) {
    case 1:
      return '-96px -832px'
    case 2:
      return '-832px -864px'
    case 3:
      return '-64px -832px'
    case 4:
      return '-256px -832px'
    case 5:
      return '0 -32px'
    case 6:
      return '-32px -32px'
    case 7:
      return '0px -64px'
    case 8:
      return '-32px -64px'
    case 9:
      return '-768px -864px'
    case 10:
      return '-96px -864px'
    case 11:
      return '0 -160px'
    case 12:
      return '-224px -1313px'
    default:
      return '0 0'
  }
}

export const Tile = styled.div`
  cursor: pointer;
  float: left;
  width: ${({ tileSize }: TileProps) => tileSize}px;
  height: ${({ tileSize }: TileProps) => tileSize}px;
  background-image: url(${require('../../assets/images/base.png')});
  background-position: ${normalizeTilePosition};

  &:hover {
    box-shadow: inset 0 0 10px #fff;
  }
`
