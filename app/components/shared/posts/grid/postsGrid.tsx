import {FC} from 'react'
import { SinglePost } from '../../../../helpers/posts-util'
import { PostItem } from '../item/postItem'
import classes from "./posts-grid.module.css"

interface Props {
  posts: SinglePost[]
}

export const PostsGrid: FC<Props> = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} {...post}/>)}
    </ul>
  )
}
