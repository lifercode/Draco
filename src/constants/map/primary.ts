import { TILE_IMG } from '../tiles'

const a1 = TILE_IMG.TREE_TOP_LEFT
const a2 = TILE_IMG.TREE_TOP_RIGHT
const a3 = TILE_IMG.TREE_BOTTOM_LEFT
const a4 = TILE_IMG.TREE_BOTTOM_RIGHT
const a5 = TILE_IMG.WALLS_TOP_LEFT
const a6 = TILE_IMG.WALLS_HORIZ
const a7 = TILE_IMG.WALLS_TOP_RIGHT
const a8 = TILE_IMG.WALLS_VERT
const a9 = TILE_IMG.WALLS_BOTTOM_LEFT
const b1 = TILE_IMG.WALLS_BOTTOM_RIGHT
const b2 = TILE_IMG.DOOR
const b3 = TILE_IMG.BUSH
const zz = TILE_IMG.DEFAULT

const map = {
  name: 'primary',
  doors: [
    { x: 5, y: 1, target: 'small' }
  ],
  layers: [
    [
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz],
      [zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz]
    ],
    [
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a7,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,b2,b3,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,b3,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,b3,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,b3,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,b3,zz,zz,zz,zz,zz,zz,zz,zz,zz,b3,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a8,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,zz,a8,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a9,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,b1,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
      [a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2,a1,a2],
      [a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4,a3,a4],
    ]
  ]
}

export default map
