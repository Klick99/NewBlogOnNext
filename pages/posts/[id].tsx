import MainContainer from "../../layout/MainContainer";

const selectedPost = () => {
   return (
      <MainContainer>
         <article>
            <section>
               {/*<h1>{post.title}</h1>
               <span>{post.body}</span>*/}
            </section>
            <section>

            </section>
            <section>
               <button>Delete post</button>
               <button>Update post</button>
            </section>
         </article>
      </MainContainer>
   )
}

export default selectedPost;
