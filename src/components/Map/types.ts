import { MapType } from '../Game/types'

export type ScreenTypes = {
  width: number,
  height: number,
  tileSize: number
}

export type LayerProps = {
  screen: ScreenTypes,
}

export type TileProps = {
  value: number,
  tileSize: number,
}

export type CameraType = {
  y: number,
  x: number
}
