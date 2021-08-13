import {useState} from "react";
import MainContainer from "../../layout/MainContainer";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useRouter} from "next/router";
import {postType} from "../../types/postsTypes";

const selectedPost = ({data}) => {
   const [body, setBody] = useState('')
   const [title, setTitle] = useState('')
   const [postData, setNewData] = useState<postType>(data)
   const [toggle, setToggleUpdate] = useState(false)
   const router = useRouter()

   const createBody = (e) => {
      setBody(e.currentTarget.value)
   }
   const updateTitle = (e) => {
      setTitle(e.currentTarget.value)
   }
   const handleSubmit = async () => {
      const response = await axios.post('https://simple-blog-api.crew.red/comments', {
         postId: data.id,
         body: body
      })
      setNewData({...postData, comments: [...postData.comments, response.data]})
      setBody('')
   }

   const updatePost = async () => {
      const response = await axios.put(`https://simple-blog-api.crew.red/posts/${postData.id}`, {
         title: title,
         body: body
      })
      setNewData({
         ...postData,
         title: response.data.title,
         body: response.data.body,
      })
      toggleUpdatePost()
   }
   const toggleUpdatePost = () => {
      setToggleUpdate(!toggle)
      toggle
         ? setBody('')
         : (
            setTitle(postData.title),
            setBody(postData.body)
         )
   }
   const deletePost = async () => {
      await axios.delete(`https://simple-blog-api.crew.red/posts/${postData.id}`).then(()=>{
         router.push(`/`)
      })
   }

   console.log(postData)

   return (
      <MainContainer>
         {toggle
            ? <article>
                  <p><input type='text'
                            value={title}
                            onChange={updateTitle}
                  /></p>
                  <p><input type='text'
                            value={body}
                            onChange={createBody}
                  /></p>
                  <button onClick={updatePost}>Update</button>
                  <button onClick={toggleUpdatePost}>Cancel</button>
            </article>
            : <article>
               <section>
                  <h1>{postData.title}</h1>
                  <span>{postData.body}</span>
               </section>
               <section>
                  <button onClick={deletePost}>Delete post</button>
                  <button onClick={toggleUpdatePost}>Update post</button>
               </section>
               <section>
                  {postData.comments.map((comment) =>
                     <article key={comment.id}>
                        <span>{comment.body}</span>
                     </article>
                  )}
               </section>
               <form onSubmit={handleSubmit}>
                  <p><input type='text'
                            value={body}
                            onChange={createBody}/></p>
                  <button>Add your comment</button>
               </form>
            </article>
         }
      </MainContainer>
   )
}

export default selectedPost;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
   const response = await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}?_embed=comments`)
   return {
      props: {
         data: response.data
      }
   }
}
