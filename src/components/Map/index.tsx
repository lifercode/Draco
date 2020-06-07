import React, { useContext } from 'react'

import {
  Squad,
  Layer,
  Tile
} from './styles'

import { context } from '../../store'

const Map = () => {
  const { state } = useContext(context)

  const camera = state.playerPosition
  const screen = state.setup.screen

  const { layers } = state.setup.map

  const getRows = (value: string[][]) => {
    return value.slice(camera.y, screen.height+camera.y)
  }

  const getCols = (value: string[]) => {
    return value.slice(camera.x, screen.width+camera.x)
  }

  const renderTiles = (tiles: string[], index: number) => {
    const handleTileCLick = (tile: string, tileIndex: number) => {
      const y = index + camera.y
      const x = tileIndex + camera.x

      console.log(`tile clicked x: ${x}, y: ${y}, tileValue: ${tile}`)
    }

    return (
      getCols(tiles).map((tile, index) => (
        <Tile
          key={index}
          value={tile}
          tileSize={screen.tileSize}
          onClick={() => handleTileCLick(tile, index)}
        />
      ))
    )
  }

  const renderLayer = (layer: string[][]) => (
    getRows(layer).map((tiles, index) =>
      renderTiles(tiles, index)
    )
  )

  return (
    <Squad screen={screen}>
      {layers.map((layer, index) => (
        <Layer key={index} screen={screen}>
          {renderLayer(layer)}
        </Layer>
      ))}
    </Squad>
  )
}

export default Map
