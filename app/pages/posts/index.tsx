import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import AllPosts from "../../components/shared/posts/all/allPosts";
import { getAllPosts, SinglePost } from "../../helpers/posts-util";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const AllPostsPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: SinglePost[];
}> = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};



export default AllPostsPage;
