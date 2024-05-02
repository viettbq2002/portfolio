import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/mock/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, thumbnail, id } = project;
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold line-clamp-3 text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 line-clamp-3 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={thumbnail}
            height="1000"
            width="1000"
            className="h-56 w-full object-cover object-top  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem translateZ={20} as={Link} href={`/projects/detail?id=${id}`} className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white">
            View Detail →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
