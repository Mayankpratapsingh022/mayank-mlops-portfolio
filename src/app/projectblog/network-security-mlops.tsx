import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Network Security - Malicious URL Detection using MLOps",
  description:
    "A production-ready MLOps pipeline to detect malicious URLs using XGBoost, FastAPI, Airflow, and AWS.",
};

export default function NetworkSecurityBlog() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-300">
      {/* Blog Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Network Security - Malicious URL Detection using MLOps 🚀
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Published on June 18, 2024
        </p>
      </header>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        This project delivers an end-to-end{" "}
        <span className="font-semibold">MLOps pipeline</span> for detecting
        malicious URLs using <span className="font-semibold">machine learning</span>. By integrating tools like{" "}
        <span className="font-semibold">XGBoost</span>, <span className="font-semibold">FastAPI</span>,{" "}
        <span className="font-semibold">Airflow</span>, and <span className="font-semibold">AWS</span>, it provides{" "}
        <span className="font-semibold">real-time predictions</span> and{" "}
        <span className="font-semibold">batch processing</span>, ensuring user
        safety with a robust and scalable solution.
      </p>

      {/* Highlights Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">🌟 Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Single and Batch Predictions:</strong> Streamlit UI for
            single URL predictions, FastAPI for batch processing.
          </li>
          <li>
            <strong>MLOps Pipeline:</strong> Includes ingestion, transformation,
            validation, training, and deployment.
          </li>
          <li>
            <strong>CI/CD with GitHub Actions:</strong> Automated testing,
            containerization, and deployment to AWS EC2.
          </li>
          <li>
            <strong>Orchestration with Airflow:</strong> DAGs for retraining
            pipelines and batch prediction.
          </li>
          <li>
            <strong>Monitoring:</strong> MLflow for metrics tracking and AWS S3
            for artifact storage.
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-300">
          <div>
            <p>
              <strong>Frontend:</strong> Streamlit
            </p>
            <p>
              <strong>Backend:</strong> FastAPI
            </p>
          </div>
          <div>
            <p>
              <strong>ML Modeling:</strong> XGBoost
            </p>
            <p>
              <strong>Database:</strong> MongoDB
            </p>
          </div>
          <div>
            <p>
              <strong>Orchestration:</strong> Apache Airflow
            </p>
            <p>
              <strong>CI/CD:</strong> GitHub Actions
            </p>
          </div>
          <div>
            <p>
              <strong>Containerization:</strong> Docker, AWS ECR
            </p>
            <p>
              <strong>Cloud:</strong> AWS S3, AWS EC2
            </p>
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture</h2>
        <div className="flex justify-center mb-4">
          <Image
            src="/network_security_mlops.png" // Local image path
            alt="Network Security Architecture Diagram"
            width={600}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <p>
          The project follows a modular design to ensure scalability and
          efficiency:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Data Ingestion:</strong> Fetched and validated from MongoDB.
          </li>
          <li>
            <strong>Model Training:</strong> XGBoost classifier tracked using
            MLflow.
          </li>
          <li>
            <strong>Deployment:</strong> Dockerized and deployed to AWS EC2.
          </li>
          <li>
            <strong>Monitoring:</strong> Retraining pipelines automated via
            Airflow.
          </li>
        </ul>
      </div>

      {/* Steps to Run */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">⚙️ How to Run</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Clone the Repository:</strong>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <code>git clone https://github.com/yourusername/network-security-mlops.git</code>
            </pre>
          </li>
          <li>
            <strong>Install Dependencies:</strong>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <code>pip install -r requirements.txt</code>
            </pre>
          </li>
          <li>
            <strong>Run the Application:</strong>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <code>streamlit run app.py</code>
            </pre>
          </li>
        </ol>
      </div>

      {/* GitHub Link */}
      <div className="text-center mt-8">
        <Link
          href="https://github.com/yourusername/network-security-mlops"
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
        >
          View Project on GitHub
        </Link>
      </div>
    </section>
  );
}
