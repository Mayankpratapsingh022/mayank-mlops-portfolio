"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Chapter {
  title: string;
  slug: string;
  url: string;
  description: string;
}

export default function BlogList() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch("https://blogs.mayankpratapsingh.in/api/chapters");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data: Chapter[] = await res.json();
        setChapters(data);
      } catch (err) {
        console.error("Error fetching chapters:", err);
        setError("Failed to fetch blogs.");
      }
    };

    fetchChapters();
  }, []);

  return (
    <section className="pb-4 pt-5 md:pb-12 md:pt-5 lg:pt-16">
      <div className="flex flex-col max-w-5xl">
        <h2 className="text-2xl font-bold text-primary">Latest Blogs</h2>
        <hr className="my-4" />

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : chapters.length === 0 ? (
          <p className="text-gray-500">Loading blogs...</p>
        ) : (
          <>
            <ul className="space-y-4">
              {chapters.map((chapter: Chapter) => (
                <li key={chapter.slug} className="flex flex-col gap-1">
                  <a
                    href={chapter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal underline text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  >
                    {chapter.title}
                  </a>
                  <p className="text-sm text-gray-500">{chapter.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <a
                href="https://blogs.mayankpratapsingh.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  See More Blogs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
