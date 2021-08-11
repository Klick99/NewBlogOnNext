import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {HYDRATE} from "next-redux-wrapper";


export const rootReducer = combineReducers({
   postsReducer: postsReducer
})


export const reducer = (state, action) => {
   if (action.type === HYDRATE) {
      const nextState = {
         ...state,
         ...action.payload,
      }
      if (state.count) nextState.count = state.count
      return nextState
   } else {
      return rootReducer(state, action)
   }
}

export type RootState = ReturnType<typeof reducer>
