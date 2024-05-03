import { lilyScriptOne } from "@/components/ui/fonts";
import Highlight from "@/components/ui/highlight";
import SocialButton from "@/components/ui/social-button";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";

const Introduction = () => {
  const words = [
    {
      text: "A",
    },
    {
      text: "Passionate",
    },
    {
      text: "Web",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="container overflow-hidden ">
      <div className="flex flex-col lg:flex-row   items-center">
        <div className="basis-[70%]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">Welcome to,</h1>
          <TextGenerateEffect className={lilyScriptOne.className} words={"Quoc Viet's Porfolio"} />
          <TypewriterEffect className="mt-4" words={words} />

          <nav className="flex gap-5 flex-row mt-5 ">
            {/* linkedIn */}
            <SocialButton to="https://github.com/viettbq2002">
              <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </SocialButton>
            {/* facebook */}
            <SocialButton to="https://www.facebook.com/viet.z.202/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1.6em" fill="white" viewBox="0 0 50 50">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
            </SocialButton>
            <SocialButton to="https://www.linkedin.com/in/qu%E1%BB%91c-vi%E1%BB%87t-103968237/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1.6em" fill="white" viewBox="0 0 64 64">
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z"></path>
              </svg>
            </SocialButton>
          </nav>
        </div>
        <div className="lg:text-right pt-3 md:mt-0 mt-3   md:border-t-4    basis-[30%]">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className={"    text-neutral-700 text-2xl dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto " + lilyScriptOne.className}
          >
            I&apos;m Quoc Viet
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-loose  mx-auto "
          >
            a <Highlight className="text-black font-bold dark:text-white">Full Stack Web Developer,</Highlight> with a deep passion for crafting
            exceptional websites. I thrive on the challenge of translating ideas into user-friendly and visually appealing experiences.
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
