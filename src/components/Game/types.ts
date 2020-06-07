export type ScreenType = {
  width: number,
  height: number,
  tileSize: number
}

export type MapType = {
  layers: number[][][],
  name: string
}

export type SetupType = {
  map: MapType,
  screen: ScreenType
}
