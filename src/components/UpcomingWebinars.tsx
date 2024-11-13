"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Jazz Improvisation Fundamentals",
    description:
      "Learn the essential building blocks of jazz improvisation with renowned saxophonist Marcus Thompson. Perfect for intermediate players looking to explore the world of jazz.",
    slug: "jazz-improvisation-fundamentals",
    isFeatured: true,
  },
  {
    title: "Music Theory Made Simple",
    description:
      "Break down complex music theory concepts into digestible lessons. Ideal for beginners wanting to understand the language of music.",
    slug: "music-theory-made-simple",
    isFeatured: true,
  },
  {
    title: "Vocal Techniques for Modern Genres",
    description:
      "Master contemporary vocal techniques used in pop, R&B, and rock. Join vocal coach Sarah Chen for this comprehensive workshop.",
    slug: "vocal-techniques-modern",
    isFeatured: true,
  },
  {
    title: "Home Recording Studio Setup",
    description:
      "Learn how to create professional-quality recordings from home. Coverage includes equipment selection, room acoustics, and basic mixing.",
    slug: "home-recording-studio",
    isFeatured: false,
  },
  {
    title: "Classical Piano Masterclass",
    description:
      "An in-depth exploration of classical piano techniques and interpretation with pianist David Mueller. Focus on Romantic era compositions.",
    slug: "classical-piano-masterclass",
    isFeatured: true,
  },
  {
    title: "Guitar Effects and Pedals",
    description:
      "Discover how to craft your perfect tone using effects pedals. From delay to distortion, learn to build your pedalboard like a pro.",
    slug: "guitar-effects-pedals",
    isFeatured: false,
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
