export interface stateType {
   posts: postType[],
   selectedPost?: postType,
}
export interface postType {
   id: number,
   title: string,
   body: string
   comments?: commentType[] | null
}

export interface newPost {
   title: string,
   body: string
}

export interface commentType {
   id: number,
   postId: number,
   body: string
}

export enum PostActionsTypes {
   REQUEST_POSTS = 'REQUEST_POSTS',
   SELECT_A_POST = 'SELECT_A_POST',
   CREATE_POST = 'CREATE_POST',
   DELETE_POST = 'DELETE_POST'
}


interface RequestPostsAction {
   type: PostActionsTypes.REQUEST_POSTS,
   posts: postType[]
}
interface RequestAPostAction {
   type: PostActionsTypes.SELECT_A_POST,
   post: postType
}
interface CreatePostAction {
   type: PostActionsTypes.CREATE_POST,
   post: newPost
}
interface DeletePostAction {
   type: PostActionsTypes.DELETE_POST,
   id: number
}

export type ActionsTypes =
   RequestPostsAction
   | RequestAPostAction
   | CreatePostAction
   | DeletePostAction
