import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostMeta  {
title: string
date: string
image: string
excerpt: string
isFeatured: boolean
}

export interface SinglePost {
    title: string,
    image: string,
    date: string,
    excerpt: string,
    slug: string
  }
  

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName: string){
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const {data, content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, "");

    const postData = {
        slug: postSlug,
        ...data as PostMeta,
        content
    };

    return postData;
}

export function getAllPosts(){
   const fileNames = fs.readdirSync(postsDirectory);

   const allPosts = fileNames.map(fileName => getPostData(fileName))

   return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured)
}