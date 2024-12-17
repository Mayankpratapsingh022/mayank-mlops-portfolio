import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const projectBlogs = [
  "network-security-mlops",
  "customer-satisfaction-zenml",
  "neural-network-scratch",
];

export default function ProjectBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!projectBlogs.includes(slug)) {
    notFound(); // Show 404 for invalid slugs
  }

  const BlogComponent = dynamic(
    () => import(`../${slug}.tsx`).then((mod) => mod.default),
    { loading: () => <p>Loading...</p> }
  );

  return (
    <section className="max-w-4xl mx-auto p-6">
      <BlogComponent />
    </section>
  );
}
