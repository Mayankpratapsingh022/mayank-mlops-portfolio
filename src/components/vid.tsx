"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

// === Example video data ===
const videos = [
      {
    videoId: "yVZTtnSkya8",
    title: "A visual guide to Word Embeddings",
    description: "Dive deep into the fascinating world of word embeddings and discover how computers transform text into meaningful numbers!",
    date: "Jul 9, 2025",
    tags: ["word embeddings","Word2Vec","NLP" , "transformers"],
  },
  {
    videoId: "APnKbi448O4",
    title: "A visual introduction to tokenization in LLMs | Byte Pair Encoding Algorithm",
    description: "In this video, I have explained tokenization in Large Language Models (LLMs) in a visual manner.",
    date: "March 13, 2025",
    tags: ["BPE", "Tokenization", "LLMs"],
  },

];

// === Main Component ===
export default function YouTubeVideoCardGallery() {
  return (
    <div className=" "><h2 className="text-2xl font-bold text-primary mb-4">Some of My Lectures</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        
      {videos.map((video) => (
        <YouTubeVideoCard key={video.videoId} {...video} />
      ))}
    </div>
    </div>
  );
}

// === Card with upgraded modal ===
function YouTubeVideoCard({
  videoId,
  title,
  description,
  date,
  tags,
}: {
  videoId: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Card className="group relative overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out">
          <div className="relative">
            <Image
              src={thumbnail}
              alt={title}
              width={500}
              height={300}
              className="h-48 w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="w-12 h-12 text-white drop-shadow-xl" />
            </div>
          </div>

          <CardHeader className="px-4 pt-2">
            <CardTitle className="text-sm font-semibold">{title}</CardTitle>
            {date && <p className="text-xs text-muted-foreground">{date}</p>}
          </CardHeader>

          <CardContent className="px-4 pb-2">
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            {tags && (
              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((tag, idx) => (
                  <Badge key={idx} className="text-[10px] px-1 py-0" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="px-4 pb-3">
            <Link href={youtubeLink} target="_blank" className="text-xs underline font-medium">
              Watch on YouTube
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* === Optimized Modal === */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] max-w-3xl p-2 md:p-4 z-50">
          <DialogHeader className="mb-2">
            <DialogTitle className="text-sm md:text-base line-clamp-1">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-video">
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
              style={{ border: "none" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
