import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getButterClient, type ButterPost } from "@/lib/buttercms";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

async function getPost(slug: string): Promise<ButterPost | null> {
  try {
    const butter = getButterClient();
    const response = await butter.post.retrieve(slug);

    return (response.data?.data ?? null) as ButterPost | null;
  } catch (error) {
    console.error(`[ButterCMS] Failed to load blog post "${slug}":`, error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Polk Systems",
      description: "The requested Polk Systems blog post could not be found.",
    };
  }

  const title = post.seo_title || post.meta_title || `${post.title} | Polk Systems`;
  const description =
    post.meta_description ||
    stripHtml(post.summary) ||
    "A Polk Systems article about reliable, privacy-first home automation.";

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.featured_image ? [post.featured_image] : undefined,
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = formatDate(post.published);
  const authorName = [post.author?.first_name, post.author?.last_name]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/blog"
          className="text-sm font-semibold text-white/60 underline underline-offset-4 hover:text-white"
        >
          Back to blog
        </Link>

        <header className="mt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Polk Systems Blog
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          {(publishedDate || authorName) && (
            <p className="mt-5 text-sm text-white/50">
              {publishedDate}
              {publishedDate && authorName ? " · " : ""}
              {authorName}
            </p>
          )}

          {post.summary ? (
            <p className="mt-6 text-lg leading-8 text-white/70">
              {stripHtml(post.summary)}
            </p>
          ) : null}

          {post.featured_image ? (
            <img
              src={post.featured_image}
              alt=""
              className="mt-10 w-full rounded-3xl border border-white/10 object-cover"
            />
          ) : null}
        </header>

        <div
          className="prose prose-invert mt-12 max-w-none prose-headings:text-white prose-p:text-white/75 prose-a:text-white prose-strong:text-white prose-li:text-white/75"
          dangerouslySetInnerHTML={{ __html: post.body ?? "" }}
        />
      </article>
    </main>
  );
}