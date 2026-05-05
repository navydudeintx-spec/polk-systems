import type { Metadata } from "next";
import Link from "next/link";
import { getButterClient, type ButterPostSummary } from "@/lib/buttercms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home Automation Blog | Polk Systems",
  description:
    "Practical home automation articles from Polk Systems covering local-first smart homes, privacy, lighting, comfort, cameras, and reliable automation design.",
  alternates: {
    canonical: "/blog",
  },
};

function stripHtml(value?: string) {
  return value
    ? value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
    : "";
}

function formatDate(value?: string) {
  if (!value) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

async function getPosts(): Promise<ButterPostSummary[]> {
  try {
    const butter = getButterClient();
    const response = await butter.post.list({
      page: 1,
      page_size: 10,
    });

    return (response.data?.data ?? []) as ButterPostSummary[];
  } catch (error) {
    console.error("[ButterCMS] Failed to load blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Polk Systems Blog
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Practical home automation, built around privacy and reliability.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Articles about local-first smart homes, lighting control, automated
            comfort, camera systems, and the difference between gadgets and a
            dependable home automation system.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">Blog posts coming soon.</h2>
            <p className="mt-3 max-w-2xl text-white/65">
              The blog is connected, but no posts are available yet. Once posts
              are published in ButterCMS, they will appear here without changing
              the main Polk Systems website.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6">
            {posts.map((post) => {
              const publishedDate = formatDate(post.published);
              const summary = stripHtml(post.summary);

              return (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    {post.featured_image ? (
                      <img
                        src={post.featured_image}
                        alt=""
                        className="h-48 w-full rounded-2xl object-cover md:w-64"
                      />
                    ) : null}

                    <div className="flex-1">
                      {publishedDate ? (
                        <p className="text-sm text-white/45">
                          {publishedDate}
                        </p>
                      ) : null}

                      <h2 className="mt-2 text-2xl font-semibold">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {summary ? (
                        <p className="mt-3 text-base leading-7 text-white/65">
                          {summary}
                        </p>
                      ) : null}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-5 inline-flex text-sm font-semibold text-white underline underline-offset-4"
                      >
                        Read article
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}