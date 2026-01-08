import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export type BlogPostData = BlogPost["data"];

export interface TagCount {
	tag: string;
	count: number;
}

export interface ProcessedBlogPost extends BlogPost {
	displayTags: string[];
}
