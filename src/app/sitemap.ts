import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { siteUrl } from "@/lib/site";

async function lastModifiedFor(relativePath: string) {
  const file = join(process.cwd(), "src", "app", relativePath);
  return (await stat(file)).mtime;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: siteUrl,
      lastModified: await lastModifiedFor("page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: await lastModifiedFor(join("about-us", "page.tsx")),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
