"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "The personalized attention and expert instruction I received helped me grow from a beginner pianist to performing confidently in recitals. The teachers here truly care about each student's development.",
    name: "Sarah Chen",
    title: "Piano Student, 3 Years",
  },
  {
    quote:
      "As a parent, I've seen my daughter's passion for violin flourish under the guidance of the incredible instructors. The supportive environment and structured curriculum have been instrumental in her musical journey.",
    name: "Michael Rodriguez",
    title: "Parent of Violin Student",
  },
  {
    quote:
      "The theory classes complemented my guitar lessons perfectly, giving me a deeper understanding of music that transformed how I play and compose. This school offers a comprehensive musical education.",
    name: "James Wilson",
    title: "Guitar & Theory Student",
  },
  {
    quote:
      "I started voice lessons here as an adult beginner, and the instructors made me feel completely comfortable. Their expertise and patience helped me discover my voice and build confidence.",
    name: "Emma Thompson",
    title: "Voice Student, 2 Years",
  },
  {
    quote:
      "The ensemble programs taught me invaluable lessons about collaboration and musicianship. Playing with others has improved my skills tremendously and created lasting friendships.",
    name: "David Park",
    title: "Cello Student, 4 Years",
  },
  {
    quote:
      "After trying several music schools, we finally found our home here. The professional yet warm atmosphere and quality of instruction is unmatched in the area.",
    name: "Lisa Martinez",
    title: "Parent of Multiple Students",
  },
  {
    quote:
      "The master classes and performance opportunities have been incredible for my development as a serious music student. This school truly prepares you for a future in music.",
    name: "Alexander Kim",
    title: "Advanced Violin Student",
  },
  {
    quote:
      "The drum program here is outstanding. The instructors' real-world experience and modern teaching methods have helped me progress faster than I thought possible.",
    name: "Ryan Foster",
    title: "Percussion Student, 1 Year",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
