import Image from 'next/image'
import {FC} from 'react'
import { SinglePost } from '../../../../helpers/posts-util'


import classes from "./post-header.module.css"

interface Props {
    title: SinglePost["title"],
    image: SinglePost["image"]
}

const PostHeader: FC<Props> = ({title, image}) => {
  return (
    <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150}/>
    </header>
  )
}

export default PostHeader