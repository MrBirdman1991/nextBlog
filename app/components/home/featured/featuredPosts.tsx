import {FC} from 'react'
import { PostsGrid } from '../../shared/posts/grid/postsGrid'
import { SinglePost } from '../../shared/posts/item/postItem'
import classes from "./featured-posts.module.css"

interface Props{
  posts: SinglePost[]
}

export const FeaturedPosts: FC<Props> = ({posts}) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}
