import Link from "next/link";
import Image from "next/image";

// Example blog metadata
const projectBlogs = [
  {
    slug: "network-security-mlops",
    title: "Network Security - Malicious URL Detection using MLOps",
    description:
      "An end-to-end MLOps pipeline that detects malicious URLs using XGBoost, FastAPI, and AWS.",
    thumbnailImage: "/network_security_mlops.png",
    publishedAt: "2024-06-18",
  },
  {
    slug: "customer-satisfaction-zenml",
    title: "Customer Satisfaction Prediction using ZenML",
    description: "A machine learning project to predict customer satisfaction.",
    thumbnailImage: "/customer_pipeline.jpg",
    publishedAt: "2024-05-15",
  },
  {
    slug: "neural-network-scratch",
    title: "Neural Network from Scratch",
    description: "Building a fully functional neural network using Python.",
    thumbnailImage: "/neural_net.jpg",
    publishedAt: "2024-04-20",
  },
];

export default function ProjectBlogPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Projects Blog</h1>
      <div className="space-y-6">
        {projectBlogs.map((project) => (
          <Link
            href={`/projectblog/${project.slug}`}
            key={project.slug}
            className="flex items-center gap-4 border rounded-lg p-4 hover:shadow-md"
          >
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              width={120}
              height={80}
              className="rounded-md"
            />
            <div>
              <h2 className="text-xl font-semibold hover:text-blue-500">
                {project.title}
              </h2>
              <p className="text-xs text-gray-500 mb-1">{project.publishedAt}</p>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
