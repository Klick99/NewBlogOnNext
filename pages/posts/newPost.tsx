import {useRouter} from "next/router";
import MainContainer from "../../layout/MainContainer";
import axios from "axios";
import {useState} from "react";

const newPost = () => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const router = useRouter()
   const updateTitle = (e) => {
      setTitle(e.currentTarget.value)
   }
   const updateBody = (e) => {
      setBody(e.currentTarget.value)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await axios.post('https://simple-blog-api.crew.red/posts', {
         title: title,
         body: body
      }).then(()=>router.push(`/`))
      console.log(title, body)
   }

   return (

      <MainContainer>
         <form onSubmit={handleSubmit}>
            <label htmlFor={"new-post-title"}>Title your post:</label>
            <input className="new-post-title"
                   type="text"
                   value={title}
                   onChange={updateTitle}
            />
            <label htmlFor={"new-post-body"}>Share your thoughts:</label>
            <input className="new-post-body"
                   type="text"
                   value={body}
                   onChange={updateBody}
            />
            <button>Create Post</button>
         </form>
      </MainContainer>
   )
}

export default newPost;
