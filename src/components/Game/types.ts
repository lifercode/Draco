export type ScreenType = {
  width: number,
  height: number,
  tileSize: number
}

export type MapType = {
  layers: string[][][],
  name: string
}

export type SetupType = {
  map: MapType,
  screen: ScreenType
}
