import {ActionsTypes, PostActionsTypes, postType} from "../../types/postsTypes";
import {Dispatch} from "redux";
import axios from "axios";

export const requestPosts = (posts: postType[]): ActionsTypes => ({type: PostActionsTypes.REQUEST_POSTS, posts})

export const requestPostsThank = () => {
   return async (dispatch: Dispatch<ActionsTypes>) => {
      let posts = await axios.get('https://simple-blog-api.crew.red/posts')
         .then(res => res.data)
      dispatch(requestPosts(posts))
   }
}
