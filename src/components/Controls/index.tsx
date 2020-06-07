import React, { useCallback, useEffect, useContext } from 'react'

import useEventListener from '../../hooks/useEventListener'
import { primary, small } from '../../constants/map'
import { context } from '../../store'
import { ACTION } from '../../constants/actions'

const Controls = () => {
  const globalState = useContext(context)
  const { state, dispatch } = globalState
  const { setup, playerPosition } = state

  const maxY = setup.map.layers[0].length - setup.screen.height
  const maxX = setup.map.layers[0][0].length - setup.screen.width

  const handler = useCallback(
    (e: any) => {
      e.preventDefault()
      switch (e.key) {
        case 'ArrowUp': return dispatch({ type: ACTION.MOVE_TOP })
        case 'ArrowDown': return dispatch({ type: ACTION.MOVE_BOTTOM })
        case 'ArrowLeft': return dispatch({ type: ACTION.MOVE_LEFT })
        case 'ArrowRight': return dispatch({ type: ACTION.MOVE_RIGHT })
        default: return
      }
    },
    [dispatch]
  )

  useEventListener('keydown', handler)

  const verifyPosition = useCallback(
    () => {
      if (setup.map.name === 'small' && playerPosition.x === maxX && playerPosition.y === maxY) {
        dispatch({ type: ACTION.CHANGE_MAP, payload: { map: primary } })
      }
  
      if (setup.map.name === 'primary' && playerPosition.x === maxX && playerPosition.y === maxY) {
        dispatch({ type: ACTION.CHANGE_MAP, payload: { map: small } })
      }
    },
    [dispatch, maxX, maxY, playerPosition.x, playerPosition.y, setup]
  )

  useEffect(() => {
    verifyPosition()
  }, [playerPosition, verifyPosition])

  return <div />
}

export default Controls
