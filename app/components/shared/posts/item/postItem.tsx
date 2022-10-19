import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SinglePost } from "../../../../helpers/posts-util";
import classes from "./post-item.module.css"




export const PostItem: FC<SinglePost> = ({date, excerpt, image, slug, title}) => {

  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  const linkPath = `/posts/${slug}`
  const imagePath = `/images/posts/${image}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} layout="responsive" width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
