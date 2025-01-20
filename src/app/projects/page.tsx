
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export const metadata = {
  title: "Projects",
  description: "A showcase of my machine learning and MLOps projects.",
};



// Project Data
const projects = [

   {
      title: "Network Security - Malicious URL Detection using MLOps",
      href: "projectblog/network-security-mlops",
      dates: "",
      active: true,
      description:
        "Developed an end-to-end MLOps project to detect malicious URLs using XGBoost. Integrated robust pipelines for data ingestion, model training, deployment, and monitoring.",
      technologies: [
        "Streamlit",
        "FastAPI",
        "XGBoost",
        "MongoDB",
        "Apache Airflow",
        "MLflow",
        "GitHub Actions",
        "Docker",
        "AWS S3",
        "AWS EC2 Instance"
      ],
      links: [
        // {
        //   type: "Blog",
        //   href: "https://github.com/Mayankpratapsingh022/Network_Security",
         
        // },
        {
          type: "GitHub",
          href: "https://github.com/Mayankpratapsingh022/Network_Security",
          icon: "",
          
        },
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=stdsfTTr4xk",
          icon: "",
 
        }
      ],
      image: "/network_security_mlops.png",
    },
    {
      title: "US Visa Approval Prediction using MLOps",
      href: "https://github.com/Mayankpratapsingh022/US-VISA-APPROVAL-PREDICTION-MLOPS",
      dates: "",
      active: true,
      description:
        "Built an end-to-end MLOps pipeline to predict the approval status of US visa applications. Implemented machine learning models, deep learning techniques, and automated deployment pipelines.",
      technologies: [
        "FastAPI",
        "Docker",
        "AWS Cloud Services",
        "GitHub Actions",
        "XGBoost",
        "Custom ANN",
        "MongoDB",
        "Evidently AI",
        "Streamlit",
        "MLflow",
        "Python",
        "Pandas",
        "Scikit-Learn"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Mayankpratapsingh022/US-VISA-APPROVAL-PREDICTION-MLOPS",
          icon: "",
        },
        // {
        //   type: "Deployment Guide",
        //   href: "https://github.com/Mayankpratapsingh022/US-VISA-APPROVAL-PREDICTION-MLOPS#deployment",
        //   icon: <Icons.github className="size-3" />,
        // }
      ],
      image: "/us_visa_prediction_mlops.png",
    },
    {
      title: "Customer Satisfaction Prediction using ZenML",
      href: "https://github.com/Mayankpratapsingh022/Customer-Satisfaction-MLOps/tree/main",
      dates: "",
      active: true,
      description:
        "Predicted customer satisfaction scores for future orders using historical e-commerce data from the Brazilian E-Commerce Public Dataset by Olist. This project leverages multiple machine learning models like CatBoost, XGBoost, and LightGBM, built within a ZenML pipeline to create a production-ready solution.",
      technologies: [
        "XGboost",
        "Optuna",
        "ZenML",
        "Streamlit",
        "MLFlow"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Mayankpratapsingh022/Customer-Satisfaction-MLOps/tree/main",
          icon: "",
        },
      ],
      image: "/customer_pipeline.jpg",
      
    },
  
    {
      title: "Interactive ML Algorithm Visualizer",
      href: "https://www.mlexplain.com/linear-regression",
      dates: "",
      active: true,
      description:
        "An interactive web application designed to help users understand and experiment with machine learning algorithms visually. It offers dynamic visualizations for concepts like linear regression, allowing users to adjust parameters such as slope and intercept interactively. The platform aims to simplify ML concepts for learners through intuitive design and engaging tools.",
      technologies: [
        "TypeScript",
        "D3.js",
        "SVG",
        "Next.js"
      ],
      links: [
        {
          title: "Neural Network From Scratch",
          "type": "GitHub",
          "href": "https://github.com/Mayankpratapsingh022/MLDataViz",
          "icon": "<Icons.github className='size-3' />"
        },
        {
          "type": "Website",
          "href": "https://www.mlexplain.com/linear-regression",
          "icon": "<Icons.external className='size-3' />"
        }
      ],
      image: "/mlexplain.png",
    }, 
    {
      title: "Neural Network From Scratch",
      href: "https://github.com/Mayankpratapsingh022/Neural_Network_from_Scratch",
      dates: "",
      active: true,
      description:
        "Implemented a neural network from scratch using Python and Numpy. This project explores neural networks at a fundamental level, focusing on core concepts like backpropagation, gradient descent, and activation functions without relying on frameworks like TensorFlow or PyTorch.",
      technologies: [
        "Python",
        "Numpy",
        "Backpropagation",
        "Gradient Descent",
        "Activation Functions"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Mayankpratapsingh022/Neural_Network_from_Scratch",
          icon: "",
        }
      ],
      image: "/neural_net.jpg",
    },

];

export default function ProjectsPage() {
  return (
    <section>
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
    </BreadcrumbItem>
  

  </BreadcrumbList>
</Breadcrumb>

       


      <div className="space-y-12 w-full py-8">
     
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
       
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Projects
            </h2>
            {/* <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             More projects adding soon
            </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[1200px] mx-auto">
          {projects.map((project, id) => (
        
              <ProjectCard
                href={project.href}
                title={project.title}
                dates={project.dates} 
                key={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
      
          ))}
        </div>

       
      </div>
    </section>
  );
}
