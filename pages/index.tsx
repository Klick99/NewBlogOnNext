import MainContainer from "../layout/MainContainer";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {NextThunkDispatch, wrapper} from "../store";
import {requestPostsThank} from "../store/action-creators/postsActions";

let arr = [
   {
      "id": 1,
      "title": "Sunt aut facere repellat provident occaecati",
      "body": "Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
   },
   {
      "id": 2,
      "title": "Nesciunt iure omnis dolorem tempora et accusantium",
      "body": "Consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
   },
   {
      "id": 3,
      "title": "Optio molestias id quia eum",
      "body": "Quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
   }
]


const Index = () => {
   /*const router = useRouter()*/
   /*const {} = useActions()*/
   const posts = useTypedSelector(state => state.postsReducer.posts)
   console.log({posts})
   return (
         <MainContainer>
            <div className="center">
               <h1>Hello world!</h1>
            </div>
            <article>
               {posts.map((post: any) =>
                  <section key={post.id} /*onClick={() => router.push(`/posts/${post.id}`)}*/>
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

