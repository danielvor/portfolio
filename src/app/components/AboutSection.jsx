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
    <section className="about-section">
      <div className="container mx-auto">
        <div className="tabs">
          <div className="tab-buttons">
            <TabButton onClick={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton onClick={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton onClick={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
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
