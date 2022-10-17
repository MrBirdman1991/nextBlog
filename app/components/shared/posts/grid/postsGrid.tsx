import {FC} from 'react'
import { PostItem, SinglePost } from '../item/postItem'
import classes from "./posts-grid.module.css"

interface Props {
  posts: SinglePost[]
}

export const PostsGrid: FC<Props> = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem {...post}/>)}
    </ul>
  )
}
