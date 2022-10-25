import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import PostContent from "../../components/shared/posts/detail/postContent";
import { getAllFiles, getAllPosts, getPostData, SinglePost } from "../../helpers/posts-util";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePostPage: NextPage<PageProps> = ({post}) => {
  return (
    <PostContent {...post}/>
  )
}

export const getStaticProps: GetStaticProps<{post: SinglePost}, {slug: string}> = (context) =>{
  const {params} = context;
  if(!params|| !params.slug){
    return {notFound: true}
  }

  const postData = getPostData(params.slug)

  return{
    props: {
      post: postData
    },
    revalidate: 600
  }

}

export const getStaticPaths: GetStaticPaths = () => {
  const fileNames = getAllFiles();
  const slugs = fileNames.map(fileName => fileName.replace(/\.md$/, ""))

  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false
  }
}

export default SinglePostPage;