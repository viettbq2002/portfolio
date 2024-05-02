import ExploreButton from "@/components/ui/explore-button";
import { lilyScriptOne } from "@/components/ui/fonts";
import Highlight from "@/components/ui/highlight";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex container gap-5">
      <div>
        <h1
          className={
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 border-b-2 border-slate-950 w-1/2  dark:text-white text-black " + lilyScriptOne.className
          }
        >
          What I Do
        </h1>
        <p className="lg:text-xl text-lg leading-loose lg:leading-10 font-medium">
          I currently working on <Highlight className="font-bold"> ReactJS, NextJS, and Angular as frontend expertise</Highlight>, driven by a passion
          for crafting visually stunning UI and{" "}
          <Highlight className="font-bold"> proficiency lies in backend development using the .NET Framework</Highlight>, complemented by hands-on
          experience in microservice projects. I&apos;m also an enthusiastic on{" "}
          <Highlight className="font-bold">DevOps , actively exploring AWS, Docker, and Kubernetes</Highlight>. Continuously expanding my knowledge,
          I&apos;m always eager to embrace new technologies and trends.
        </p>
        <ExploreButton />
      </div>
      <Image className="hidden md:block" src={"/PortfolioImage.JPG"} alt="PortfolioImage" width={400} height={400} />
    </div>
  );
};

export default About;
