"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Learning Path",
    description:
      "Our adaptive learning system creates a customized journey through music theory, instrument mastery, and performance skills, adjusting to your pace and learning style.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from world-class musicians and educators with decades of experience in performance, composition, and music education from prestigious conservatories.",
  },
  {
    title: "Interactive Practice Tools",
    description:
      "Access cutting-edge practice tools including real-time feedback, tempo control, and visual aids to enhance your musical development and technical proficiency.",
  },
  {
    title: "Diverse Genre Coverage",
    description:
      "Explore a wide range of musical styles from classical to contemporary, jazz to electronic, ensuring a well-rounded musical education that spans cultures and eras.",
  },
  {
    title: "Community & Collaboration",
    description:
      "Join a vibrant community of fellow musicians, participate in virtual ensembles, and engage in collaborative projects to enhance your musical journey.",
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
