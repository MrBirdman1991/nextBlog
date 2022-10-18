import { NextPage } from "next"
import AllPosts from "../../components/shared/posts/all/allPosts";
import { DUMMY_POSTS } from "..";

const AllPostsPage: NextPage = () => {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS}/>
    </>
  )
}


export default AllPostsPage;