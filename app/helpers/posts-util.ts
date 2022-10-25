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
    content: string
  }
  

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllFiles(){
   return  fs.readdirSync(postsDirectory);
}

export function getPostData(slug: string){
    const postSlug = slug.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const {data, content} = matter(fileContent);

   

    const postData = {
        slug: postSlug,
        ...data as PostMeta,
        content
    };

    return postData;
}



export function getAllPosts(){
   const fileNames =  getAllFiles();

   const allPosts = fileNames.map(fileName => getPostData(fileName))

   return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured)
}