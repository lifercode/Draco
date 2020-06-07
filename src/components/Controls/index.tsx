import React, { useCallback, useEffect, useContext } from 'react'

import useEventListener from '../../hooks/useEventListener'
import { maps } from '../../constants/map'
import { context } from '../../store'
import { ACTION } from '../../constants/actions'

const Controls = () => {
  const globalState = useContext(context)
  const { state, dispatch } = globalState
  const { setup, playerPosition } = state

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
      setup.map.doors.map((door) => {
        const isDoorPosition = playerPosition.x === door.x - 1
          && playerPosition.y === door.y - 1

        if (isDoorPosition) {
          dispatch({
            type: ACTION.CHANGE_MAP,
            payload: {
              map: maps.filter(
                ({ name }) => name === door.target
              )[0]
            }
          })
        }

        return ''
      })
    },
    [dispatch, playerPosition.x, playerPosition.y, setup]
  )

  useEffect(() => {
    verifyPosition()
  }, [playerPosition, verifyPosition])

  return <div />
}

export default Controls
