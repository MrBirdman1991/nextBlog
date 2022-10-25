import {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import AllPosts from "../../components/shared/posts/all/allPosts";
import { getAllPosts, SinglePost } from "../../helpers/posts-util";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AllPostsPage: NextPage<PageProps> = ({ posts }) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: SinglePost[];
}> = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800
  };
};



export default AllPostsPage;
