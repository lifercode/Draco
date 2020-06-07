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

export const Tile = styled.div`
  float: left;
  width: ${({ tileSize }: TileProps) => tileSize}px;
  height: ${({ tileSize }: TileProps) => tileSize}px;
  background-image: url(${require('../../assets/images/base.png')});
  background-position: ${({ value }: TileProps) => value};
`
