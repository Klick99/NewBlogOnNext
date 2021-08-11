import {ActionsTypes, PostActionsTypes, stateType} from "../../types/postsTypes";

export const initialState: stateType  = {
   posts: [],
   selectedPost: {
      id: 0,
      title: '',
      body: '',
      comments: null
   }
}

export const postsReducer = (state= initialState, action: ActionsTypes): stateType => {
   switch (action.type) {
      case PostActionsTypes.REQUEST_POSTS: {
         return {...state, posts:action.posts}
      }
      default : return state
   }
}
