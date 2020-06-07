import React, { createContext, useReducer } from 'react'

import { ACTION } from '../constants/actions'
import { SetupType } from '../components/Game/types'
import { setup } from '../constants'

type PlayerPositionType = {
  x: number,
  y: number
}

type StateType = {
  playerPosition: PlayerPositionType,
  setup: SetupType,
}

type ContextType = {
  state: StateType,
  dispatch: React.Dispatch<any>
}

const INITIAL_STATE = {
  playerPosition: {
    x: 0,
    y: 0
  },
  setup
}

const context = createContext<ContextType>({
  state: INITIAL_STATE,
  dispatch: () => null
})

const { Provider } = context

const reducer = (state: StateType, action: any) => {
  const { setup, playerPosition } = state

  const maxY = setup.map.layers[0].length - setup.screen.height
  const maxX = setup.map.layers[0][0].length - setup.screen.width

  switch(action.type) {
    case ACTION.MOVE_TOP:
      return !(playerPosition.y > 0) ? state : {
        ...state,
        playerPosition: {
          ...state.playerPosition,
          y: state.playerPosition.y - 1
        }
      }
    case ACTION.MOVE_RIGHT:
      return !(playerPosition.x < maxX) ? state : {
        ...state,
        playerPosition: {
          ...state.playerPosition,
          x: state.playerPosition.x + 1
        }
      }
    case ACTION.MOVE_BOTTOM:
      return !(playerPosition.y < maxY) ? state : {
        ...state,
        playerPosition: {
          ...state.playerPosition,
          y: state.playerPosition.y + 1
        }
      }
    case ACTION.MOVE_LEFT:
      return !(playerPosition.x > 0) ? state : {
        ...state,
        playerPosition: {
          ...state.playerPosition,
          x: state.playerPosition.x - 1
        }
      }
    case ACTION.RESET_POSITION:
      return {
        ...state,
        playerPosition: {
          x: 0,
          y: 0
        }
      }
    case ACTION.CHANGE_MAP:
      return {
        ...state,
        playerPosition: {
          x: 0,
          y: 0
        },
        setup: {
          ...state.setup,
          map: action.payload.map
        }
      }
    default:
      throw new Error()
  }
}

const StateProvider: React.FC = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export { context, StateProvider }
