import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		author: z.string().default("Lorenzo Iovino"),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const bio = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { blog, bio };
