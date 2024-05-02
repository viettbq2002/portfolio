import ContactForm from "@/components/ui/contact-form";
import { lilyScriptOne } from "@/components/ui/fonts";
import SocialButtonGroup from "@/components/ui/social-button-group";
import React from "react";

const Contact = () => {
  return (
    <div className="container flex flex-col gap-7">
      <h1
        className={
          "text-4xl md:text-5xl lg:text-6xl font-bold  border-b-2 border-slate-950  w-1/2  dark:text-white text-black " + lilyScriptOne.className
        }
      >
        Contact me
      </h1>
      <p className="lg:text-xl text-lg ">Fill the form to send me message,I will get you as soon as possible</p>
      <ContactForm />
      <SocialButtonGroup />
    </div>
  );
};

export default Contact;
