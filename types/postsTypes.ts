export interface stateType {
   posts: postType[],
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

export type ActionsTypes = RequestPostsAction

