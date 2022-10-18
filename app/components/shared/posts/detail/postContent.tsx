import {FC} from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import PostHeader from './postHeader'

import classes from "./post-content.module.css"

const DUMMY_POST =  {
    slug: "read-more-about-schwobsies1",
    title: "Read more about schwobsies",
    image: "keksdose_shop_vorlage.jpg",
    date: "2022-02-10",
    content: "# This is first Post"
  }

const PostContent: FC = () => {
  const imagePath = `/images/posts/${DUMMY_POST.image}`  
  return (
    <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent