export type ScreenType = {
  width: number,
  height: number,
  tileSize: number
}

export type DoorType = {
  x: number,
  y: number,
  target: string
}

export type MapType = {
  layers: string[][][],
  name: string,
  doors: DoorType[]
}

export type SetupType = {
  map: MapType,
  screen: ScreenType
}
