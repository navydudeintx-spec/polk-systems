import type { MetadataRoute } from "next";
import { getButterClient } from "@/lib/buttercms";

const BASE_URL = "https://polk-systems.com";

export const revalidate = 3600;

type ButterPost = {
    slug?: string;
    published?: string;
    updated?: string;
};

async function getButterBlogPosts(): Promise<ButterPost[]> {
    const butter = getButterClient();

    const allPosts: ButterPost[] = [];
    let page = 1;
    const pageSize = 100;

    while (true) {
        const response = await butter.post.list({
            page,
            page_size: pageSize,
            exclude_body: true,
        });

        const posts = (response.data?.data ?? []) as ButterPost[];
        allPosts.push(...posts);

        const nextPage = response.data?.meta?.next_page;

        if (!nextPage) {
            break;
        }

        page = Number(nextPage);
    }

    return allPosts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const routes = [
        "/",
        "/story",
        "/how-it-works",
        "/why-we-are-different",
        "/process",
        "/process/discover",
        "/process/setup",
        "/process/activate",
        "/process/control",
        "/get-started",
        "/solutions",
        "/blog",
        "/system",
        "/technology",
        "/contact",
        "/audit",
        "/privacy",
        "/terms",
        "/license",
        "/warranty",
    ];

    const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
        priority: route === "/" ? 1 : route === "/get-started" ? 0.9 : 0.7,
    }));

    let blogRoutes: MetadataRoute.Sitemap = [];

    try {
        const posts = await getButterBlogPosts();

        blogRoutes = posts
            .filter((post) => Boolean(post.slug))
            .map((post) => ({
                url: `${BASE_URL}/blog/${post.slug}`,
                lastModified: post.updated || post.published || now,
                changeFrequency: "weekly" as const,
                priority: 0.7,
            }));
    } catch (error) {
        console.error("[SITEMAP] Failed to load ButterCMS blog posts:", error);
    }

    return [...staticRoutes, ...blogRoutes];
}