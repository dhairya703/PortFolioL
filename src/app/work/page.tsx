"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../../helpers/utils";
import { buttonVariants } from "@/components/ui/Button";

const experiences = [
  {
    company: "Vanilla Trees",
    role: "Software Developer Intern",
    duration: "06/2024 – 07/2024",
    description:
      "Delivered a cross-platform application for the Army Club, integrating movie booking, party hall and room reservations, wallet system with payment SDK, and personalized notifications. Deployed the application on the Play Store and App Store, gaining over 2,000 active users within the first few months. Tech Stack: Flutter, Node.js, MySQL, Firebase, XAMPP",
  },
  {
    company: "Fossip",
    role: "Mobile App Developer Intern",
    duration: "10/2023 – 11/2023",
    description:
      "Designed the frontend for a restaurant POS billing system and a food order dashboard for kitchen staff; introduced a QR code-based menu ordering system for customers. Integrated comprehensive API calls for seamless data communication. Tech Stack: Flutter, Node.js, MongoDB",
  },

  {
    company: "Android Club",
    role: "Tech Lead",
    duration: " 03/2024 – 03/2025",
    description:
      " Managed large-scale events and conducted impactful app development workshops with 400+ participants. Led a team of 30+ developers to build a collaborative React website, React Native games for events, and apps for people’s needs.",
  },
    {
    company: "Google Developer Student Clubs",
    role: " App Developer",
    duration: "  05/ 2023 – 05/2025",
    description:
      " Assisted in managing and developing apps collaboratively, conducted seminars on software development, and helped plan and execute hackathons.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-20 bg-background text-foreground">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Industry Experience
      </h1>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-muted shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <span className="text-sm text-muted-foreground">{exp.duration}</span>
            </div>
            <p className="mt-1 text-primary font-medium">{exp.company}</p>
            <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
