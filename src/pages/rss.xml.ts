import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const blog = await getCollection("blog");
	const publishedPosts = blog
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: "Lorenzo Iovino >> Blog",
		description:
			"Thoughts, experiences, and insights about software engineering, technology, and life by Lorenzo Iovino",
		site: context.site?.toString() || "https://lorenzoiovino.com",
		items: publishedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.slug}/`,
			author: post.data.author || "Lorenzo Iovino",
			categories: post.data.tags,
		})),
		customData: `<language>en-us</language>`,
		stylesheet: "/rss-styles.xsl",
	});
}
