import { combineReducers } from '@reduxjs/toolkit'

export interface IRobots {
  id: number,
  name: string,
  email: string,
  key?: number
}

export interface SearchRobots {
  dispatch: ({
    type: string,
    payload?: string | Array<string>
  }),

}

export const rootReducer = combineReducers({
  
})
export type RootState = ReturnType<typeof rootReducer>