import { HackathonCard } from "@/components/hackathon-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from 'next/image';
import Socials from "@/components/ui/dock_socials";
import Skills from "@/components/skills";
import Email from "@/components/email";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">




      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
           <p className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">   
                
               
              Hi, I&apos; m {DATA.name.split(" ")[0]}</p>
          
                <p className="text-pretty text-base  md:text-xl mt-4 dark:prose-invert">
                  I specialize in optimizing models and deploying <br/> AI-driven  solutions for <b>real-world </b>impact.
                  <br/>
     
                </p>
             
            </div>
            
          
              <Image
                className="inline-block shrink-0 rounded-2xl w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36"
                src="/profile.jpg"
                alt="Profile"
                width={128}
                height={128}
              />
          
       
          </div>
      
        </div>
        <Socials/> 

        <Email/>
      </section>

      <section id="about">
       
          <h2 className="text-xl font-bold">About</h2>
       
      
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
     
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
        
            <div className="flex flex-col items-center justify-center space-y-4 text-left ">
            <h2 className="text-xl font-bold w-full">Projects</h2>

              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a range of machine learning projects. 
                  Here are a few that showcase my expertise and dedication to the field.
                 
                </p>
              </div>
            </div>
        
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
         
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  // video={project.video}
                  links={project.links}
                />
          
            ))}
          </div>
          <div className="flex justify-center item-center">
          <Link
                href="/projects"
                className="mt-4 block"
              >
      <Button 
                  variant="outline" 
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                See more Projects
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
                </Link>
                </div>
        </div>
        
      </section>
   
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
  
            <h2 className="text-xl font-bold">Work Experience</h2>
     
          {DATA.work.map((work, id) => (
           
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
 
          ))}
        </div>
      </section> */}
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          
            <h2 className="text-xl font-bold">Education</h2>
         
          {DATA.education.map((education, id) => (
        
          
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
          
          ))}
        </div>
      </section> */}

      <Skills/>
    
  
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
       
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
        
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
              
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
     
              ))}
            </ul>
       
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-start gap-4 text-left  w-full py-12">
          
            <div className="space-y-3">
          
       
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
        
        </div>
      </section>
    </main>
  );
}
