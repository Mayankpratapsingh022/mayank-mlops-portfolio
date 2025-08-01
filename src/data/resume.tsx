import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mayank Pratap Singh",
  initials: "DV",
  url: "https://www.mayankpratapsingh.in/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "",
  summary:
    "I am a Machine Learning Engineer and Data Scientist  My focus lies in designing scalable machine learning models, automating workflows with MLOps, and optimizing systems for production deployment. Currently, I am focused on leveraging generative ai and llms to solve complex challenges while ensuring models are scalable, efficient, and production-ready.",
  avatarUrl: "/profile.jpg",
  skills: [
    "C", "C++", "Python", "JavaScript", "TypeScript",
    "TensorFlow", "PyTorch", "OpenCV", "Pandas", "Matplotlib",
    "Plotly", "Numpy", "Scikit-Learn", "Seaborn", "Evidently",
    "MongoDB", "MySQL", "PostgreSQL", "ChromaDB", "Supabase",
    "FastAPI", "Streamlit", "MLflow", "DVC", "Apache Airflow",
    "AWS", "Docker", "GitHub Actions", "CI/CD", "LangChain",
    "HTML5", "CSS3", "Bootstrap", "TailwindCSS", "Node.js",
    "Express.js", "Next.js", "React", "Git", "Postman",
    "Figma", "Blender", "Illustrator", "Photoshop", "Adobe XD",
    "Arduino", "Chart.js"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Projects", icon: NotebookIcon, label: "Blog" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },

  ],
  contact: {
    email: "mayankpratapsingh022@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mayankpratapsingh022",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mayankpratapsingh022/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Mayank_022",
        icon: Icons.x,

        navbar: true,
      },
   
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Second Brain Labs",
      href: "https://secondbrainlabs.com/",
      badges: [],
      location: "Remote",
      title: "Gen AI Intern",
      logoUrl: "/sbl.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Working on LLMs and AI Agents",
    },
   
  ],
  education: [
    // {
    //   school: "Manipal University Jaipur",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
 
  ],
  projects: [
    
    {
      title: "Fine-Tuning Large Language Models (LLMs)",
      href: "https://github.com/Mayankpratapsingh022/Finetuning-LLMs",
      dates: "",
      active: true,
      description:
        "Fine-tuned various open-source LLMs including LLaMA 2, Mistral, Qwen, and vision-language models for domain-specific tasks. Leveraged efficient methods like LoRA, QLoRA, and quantization using Unsloth and Hugging Face.",
      technologies: [
        "LoRA",
        "QLoRA",
        "Unsloth",
        "LLaMA 2",
        "Mistral",
        "Python",
        "JSONL",
        "Quantization",
        "Hugging Face"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Mayankpratapsingh022/Finetuning-LLMs",
          icon: "",
        },
        {
          type: "Huggingface",
          href: "https://huggingface.co/Mayank022",
          icon: "",
        }
      ],
      image: "/finetun.gif", // or "/a3de55cf-03c6-474b-957f-d3feb38a05e6.png" if you're referencing the uploaded image directly
    }
,   

{
  title: "Large Language Model (LLM) from Scratch",
  href: "https://github.com/Mayankpratapsingh022/LLM_from_Scratch/tree/master/GPT2-124M_from_Scratch",
  dates: "",
  active: true,
  description:
    "Implemented a Large Language Model (LLM) from scratch, covering every stage from data preparation and model architecture to pretraining and fine-tuning. This project demystifies transformer-based models through hands-on code and experiments, enabling a deeper understanding of attention mechanisms and token prediction.",
  technologies: [
    "Python",
    "NumPy",
    "PyTorch",
    "Transformer Architecture",
    "Attention Mechanism",
    "Word Embeddings",
    "Instruction Tuning",
    "Fine-tuning",
    "LLM Pretraining"
  ],
  links: [
    {
      type: "GitHub",
      href: "https://github.com/Mayankpratapsingh022/LLM_from_Scratch",
      icon: "",
    }
  ],
  image: "/llm_from_scratch.gif" 
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
          icon: <Icons.github className="size-3" />,
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
    },
    {
      "type": "Video",
      "href": "https://www.youtube.com/watch?v=7luEGaHig9w&t=11s",
      "icon": "<Icons.external className='size-3' />"
    }
  ],
  image: "/mlexplain.png",
}, 
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
    //   icon: <Icons.github className="size-3" />,
    // },
    {
      type: "GitHub",
      href: "https://github.com/Mayankpratapsingh022/Network_Security",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "Video",
      href: "https://www.youtube.com/watch?v=stdsfTTr4xk",
      icon: <Icons.youtube className="size-3" />,
    }
  ],
  image: "/network_security_mlops.png",
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
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/customer_pipeline.jpg",
  
}, 
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
