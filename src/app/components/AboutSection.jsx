"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python, Java, Node.js, C</li>
        <li>Development of RESTful APIs and Microservices</li>
        <li>Containers and orchestration: Docker and Kubernetes</li>
        <li>Databases: MySQL, PostgreSQL, MongoDB</li>
        <li>Cloud: AWS, GCP, Azure</li>
        <li>Version control with Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li><strong>Multiplatform Software Development</strong> - Fatec Itaquera</li>
        <li><strong>Software Engineer</strong> - FreeCodeCamp</li>
        <li><strong>Mechatronics, Robotics and Automation</strong> - ETEC Martin Luther King</li>
        <li><strong>High School Diploma</strong> - E.E. Barão de Ramalho</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics</li>
        <li>Google Cybersecurity</li>
        <li>Google Project Management</li>
        <li>Google UX Design</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a 28-year-old proactive and collaborative software developer living in São Paulo (capital), where I live with my family. Driven by a passion for technology and the desire to simplify people's lives through innovative solutions, I constantly seek to improve my skills and knowledge.

          <br />
          <br />

          I have a solid foundation in programming and development of scalable systems in academic projects involving microservices, systems design and API management.

          <br />
          <br />

          Motivated by challenges, I seek to apply my knowledge in innovative solutions that deliver value to users.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
