export type ScreenTypes = {
  width: number,
  height: number,
  tileSize: number
}

export type LayerProps = {
  screen: ScreenTypes,
}

export type TileProps = {
  value: string,
  tileSize: number,
}

export type CameraType = {
  y: number,
  x: number
}
