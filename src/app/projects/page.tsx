import { lilyScriptOne } from "@/components/ui/fonts";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import { listProject } from "@/mock/projects";
const Projects = () => {
  return (
    <div className="  pt-20   container ">
      <h1
        className={
          "text-4xl md:text-5xl lg:text-6xl font-bold  border-b-2 border-slate-950  w-1/2  dark:text-white text-black " + lilyScriptOne.className
        }
      >
        Project
      </h1>
      <div className="w-full my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {listProject.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
