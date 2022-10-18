import { NextPage } from "next";
import { FeaturedPosts } from "../components/home/featured/featuredPosts";
import { HeroSection } from "../components/home/hero/hero";
import { SinglePost } from "../components/shared/posts/item/postItem";

export const DUMMY_POSTS: SinglePost[] = [
  {
    slug: "read-more-about-schwobsies1",
    title: "Read more about schwobsies",
    image: "keksdose_shop_vorlage.jpg",
    excerpt: "Lern more about the fantastic world of a schwobsie",
    date: "2022-02-10",
  },
  {
    slug: "read-more-about-schwobsies2",
    title: "Read more about schwobsies",
    image: "keksdose_shop_vorlage.jpg",
    excerpt: "Lern more about the fantastic world of a schwobsie",
    date: "2022-02-10",
  },
  {
    slug: "read-more-about-schwobsies3",
    title: "Read more about schwobsies",
    image: "keksdose_shop_vorlage.jpg",
    excerpt: "Lern more about the fantastic world of a schwobsie",
    date: "2022-02-10",
  },
  {
    slug: "read-more-about-schwobsies4",
    title: "Read more about schwobsies",
    image: "keksdose_shop_vorlage.jpg",
    excerpt: "Lern more about the fantastic world of a schwobsie",
    date: "2022-02-10",
  },
];

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
