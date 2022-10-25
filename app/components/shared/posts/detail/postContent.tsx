import { FC } from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./postHeader";
import {Prism as Syntax} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism"

import classes from "./post-content.module.css";
import { SinglePost } from "../../../../helpers/posts-util";
import Image from "next/image";

const PostContent: FC<SinglePost> = ({ image, content, title }) => {
  const imagePath = `/images/posts/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: (data) => {
            return (
              <Image
                className={classes.image}
                src={`/images/posts/${data.src}`}
                alt={data.alt}
                width={250}
                height={250}
              />
            );
          },
          code: ({node, inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <Syntax
                children={String(children).replace(/\n$/, '')}
                //@ts-ignore
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
