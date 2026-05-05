import "server-only";
import Butter from "buttercms";

export type ButterAuthor = {
  first_name?: string;
  last_name?: string;
};

export type ButterCategory = {
  name?: string;
  slug?: string;
};

export type ButterPostSummary = {
  title: string;
  slug: string;
  summary?: string;
  published?: string;
  updated?: string;
  featured_image?: string;
  author?: ButterAuthor;
  categories?: ButterCategory[];
  seo_title?: string;
  meta_title?: string;
  meta_description?: string;
};

export type ButterPost = ButterPostSummary & {
  body?: string;
};

export function getButterClient() {
  const apiKey = process.env.BUTTER_CMS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing BUTTER_CMS_API_KEY. Add it to .env.local for local development or /etc/polk-systems/polk-systems.env for production."
    );
  }

  return Butter(apiKey);
}