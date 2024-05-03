import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { lilyScriptOne } from "@/components/ui/fonts";
import { listProject } from "@/mock/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) => {
  const project = listProject.find((project) => project.id === Number(searchParams?.id));
  return (
    <div className="  pt-20   container ">
      <Button variant={"link"}>
        <Link className="font-bold text-2xl" href={`/projects`}>
          ← Go back
        </Link>
      </Button>
      <h1 className={"text-4xl md:text-5xl text-center lg:text-6xl font-bold w-full  dark:text-white text-black  " + lilyScriptOne.className}>
        {project?.title}
      </h1>
      <div className="flex justify-center items-center">
        <hr className="my-5 h-0.5 border-t-0 bg-black w-1/4" />
      </div>
      <div className="backdrop-blur-lg p-4 shadow-lg  bg-white/30">
        <p className="text-lg">
          {project?.description}

          <span>
            {project?.additionLink && (
              <Button variant={"link"} className="font-bold">
                <Link target="_blank" href={project?.additionLink}>
                  View More
                </Link>
              </Button>
            )}
          </span>
        </p>

        <div className="flex gap-4 py-2 flex-wrap">
          <h2 className="text-xl font-bold">Role:</h2>
          {project?.role.map((role, index) => (
            <Badge className="text-md" key={index} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>

        <h2 className="text-xl font-bold">
          Objective: <span className="text-slate-600 font-semibold">{project?.objective}</span>
        </h2>
        <div className="flex justify-center mt-4 w-full items-center flex-col ">
          <h1 className={"text-4xl  font-bold   dark:text-white text-black  " + lilyScriptOne.className}>Features</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  ">
            {project?.features?.map((feature, index) => (
              <PinContainer key={index} title={feature.description}>
                <div className=" p-2 tracking-tight flex flex-col justify-center items-center gap-2 text-slate-100/50  w-[15rem] h-[8rem]  ">
                  <h3 className=" !pb-2   font-bold  text-center text-slate-100">{feature.name}</h3>

                  <div className="flex justify-center items-center w-full ">
                    <feature.icon size={60} />
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10 w-full items-center flex-col ">
          <h1 className={"text-4xl  font-bold   dark:text-white text-black  " + lilyScriptOne.className}>Tech Experience</h1>

          <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
            {project?.techStack.map((tech, index) => (
              <div
                key={index}
                className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4  relative h-[12rem]"
              >
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <EvervaultCard text={tech.name} svg={<tech.icon />} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 w-full items-center flex-col ">
          <h1 className={"text-4xl  font-bold   dark:text-white text-black  " + lilyScriptOne.className}>Screen shot</h1>
          <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 place-items-stretch ">
            {project?.screenshots?.map((screenshot, index) => (
              <Image src={screenshot.src} alt={screenshot.id.toString()} className="rounded-xl shadow-xl" width={1000} height={600} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
