"use client";
import React from "react";
import { FaAws, FaDatabase } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { MdDataExploration } from "react-icons/md";
import { RiStairsFill } from "react-icons/ri";
import {
  // Programming Languages
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,

  // Data Science & Machine Learning
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,


  // Databases
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,

  // Deployment & MLOps
  SiStreamlit,
  SiMlflow,
  SiDvc,
  SiApacheairflow,
  SiDocker,
  SiGithubactions,

  // Backend
  SiFastapi,

  // AI Frameworks
  SiLangchain,

  // Web Development
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiReact,

  // Development Tools
  SiGit,
  SiPostman,

  // Design Tools
  SiFigma,
  SiBlender,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,

  // Other Tools
  SiArduino,
  SiChartdotjs,
} from "react-icons/si";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Section data with unique stack titles
const sections = [
  { title: "Programming Languages", stack: "language" },
  { title: "Data Science & Machine Learning", stack: "ML" },
  { title: "Databases", stack: "Database" },
  { title: "Python Backend", stack: "Backend" },
  { title: "Deployment & MLOps", stack: "MLOps" },

  { title: "Web Development", stack: "Web Technology" },
  { title: "Design Tools", stack: "Design Tool" },
  { title: "Other Tools", stack: "Other Tool" },
];

// Skills data
const skillsData = [
  // Programming Languages
  { name: "C", icon: <SiC />, stack: "language" },
  { name: "C++", icon: <SiCplusplus />, stack: "language" },
  { name: "Python", icon: <SiPython />, stack: "language" },
  { name: "JavaScript", icon: <SiJavascript />, stack: "language" },
  { name: "TypeScript", icon: <SiTypescript />, stack: "language" },


  // ML
  { name: "TensorFlow", icon: <SiTensorflow />, stack: "ML" },
  { name: "PyTorch", icon: <SiPytorch />, stack: "ML" },
  { name: "OpenCV", icon: <SiOpencv />, stack: "ML" },
  { name: "Pandas", icon: <SiPandas />, stack: "ML" },
  { name: "NumPy", icon: <SiNumpy />, stack: "ML" },
  { name: "Scikit-Learn", icon: <SiScikitlearn />, stack: "ML" },
  { name: "Seaborn", icon: <BsClipboardDataFill />, stack: "ML" },
  { name: "Evidently", icon: <MdDataExploration />, stack: "ML" },
  { name: "Matplotlib", icon: <SiPlotly />, stack: "ML" },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, stack: "Database" },
  { name: "MySQL", icon: <SiMysql />, stack: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, stack: "Database" },
  { name: "Supabase", icon: <SiSupabase />, stack: "Database" },
  { name: "ChromaDB", icon: <FaDatabase />, stack: "Database" },

  // Deployment & MLOps
  { name: "Streamlit", icon: <SiStreamlit />, stack: "MLOps" },
  { name: "MLflow", icon: <SiMlflow />, stack: "MLOps" },
  { name: "DVC", icon: <SiDvc />, stack: "MLOps" },
  { name: "Apache Airflow", icon: <SiApacheairflow />, stack: "MLOps" },
  { name: "AWS", icon: <FaAws />, stack: "MLOps" },
  { name: "Docker", icon: <SiDocker />, stack: "MLOps" },
  { name: "GitHub Actions", icon: <SiGithubactions />, stack: "MLOps" },
  { name: "CI/CD", icon: <RiStairsFill />, stack: "MLOps" },

  // Backend
  { name: "FastAPI", icon: <SiFastapi />, stack: "Backend" },

  // AI Frameworks
  { name: "LangChain", icon: <SiLangchain />, stack: "ML" },

  // Web Development
  { name: "HTML", icon: <SiHtml5 />, stack: "Web Technology" },
  { name: "CSS", icon: <SiCss3 />, stack: "Web Technology" },
  { name: "React", icon: <SiReact />, stack: "Web Technology" },
  { name: "Node.js", icon: <SiNodedotjs />, stack: "Web Technology" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, stack: "Web Technology" },
  { name: "Next.js", icon: <SiNextdotjs />, stack: "Web Technology" },
  { name: "Express.js", icon: <SiExpress />, stack: "Web Technology" },
  { name: "Bootstrap", icon: <SiBootstrap />, stack: "Web Technology" },
  { name: "Chart.js", icon: <SiChartdotjs />, stack: "Web Technology" },

  // Development Tools


  // Design Tools
  { name: "Figma", icon: <SiFigma />, stack: "Design Tool" },
  { name: "Blender", icon: <SiBlender />, stack: "Design Tool" },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator />, stack: "Design Tool" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, stack: "Design Tool" },
  { name: "Adobe XD", icon: <SiAdobexd />, stack: "Design Tool" },

  // Other Tools
  { name: "Git", icon: <SiGit />, stack: "Other Tool" },
  { name: "Postman", icon: <SiPostman />, stack: "Other Tool" },
  { name: "Arduino", icon: <SiArduino />, stack: "Other Tool" },
 
];

// Filter skills by stack
const filterByStack = (stack: string) => skillsData.filter((skill) => skill.stack === stack);

export default function Skills() {
  return (
    <section id="stack" className="mb-28 flex justify-center flex-col scroll-mt-28 sm:mb-40">
  
<h2 className="text-xl font-bold">Skills</h2>

      <Accordion type="single" collapsible>
        {sections.map((section, idx) => (
          <AccordionItem value={`item-${idx + 1}`} key={section.stack}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-wrap p-5 justify-start gap-6 text-lg text-pretty dark:prose-invert">
                {filterByStack(section.stack).map((skill, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-x-1 py-1.5 px-3 rounded-lg text-xs font-medium border p-4 text-pretty shadow-sm"
                  >
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <span className="text-pretty dark:prose-invert font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
