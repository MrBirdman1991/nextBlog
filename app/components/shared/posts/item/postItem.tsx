import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import classes from "./post-item.module.css"

export interface SinglePost {
  title: string,
  image: string,
  date: Date,
  excerpt: string,
  slug: string
}



export const PostItem: FC<SinglePost> = ({date, excerpt, image, slug, title}) => {

  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="/">
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
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
