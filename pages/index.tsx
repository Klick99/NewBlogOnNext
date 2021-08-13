import MainContainer from "../layout/MainContainer";
import Link from "next/link";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {requestPostsThank} from "../store/action-creators/postsActions";

const Index = () => {
   const posts = useTypedSelector(state => state.postsReducer.posts)
   console.log({posts})
   return (
         <MainContainer>
            <div className="center">
               <h1>Hello world!</h1>
            </div>
            <article>
               {posts.map((post) =>
                  <section key={post.id}>
                     <Link href={`/posts/${post.id}`}>
                        <h5>{post.title}</h5>
                     </Link>
                     <span>{post.body}</span>
                  </section>
               )}
            </article>
         </MainContainer>
   );
};

export default Index;



export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
   const dispatch = store.dispatch as NextThunkDispatch
   await dispatch(await requestPostsThank())
})

