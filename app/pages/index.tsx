import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { FeaturedPosts } from "../components/home/featured/featuredPosts";
import { HeroSection } from "../components/home/hero/hero";
import { getFeaturedPosts, SinglePost } from "../helpers/posts-util";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<PageProps> = ({posts}) => {

  return (
    <>
      <HeroSection />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{posts: SinglePost[]}> = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800
  }
}

export default HomePage;
