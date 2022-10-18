import {FC} from 'react'
import { PostsGrid } from '../grid/postsGrid'
import { SinglePost } from '../item/postItem'
import classes from "./all-posts.module.css"

interface Props{
    posts: SinglePost[]
}

const AllPosts: FC<Props> = ({posts}) => {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts
