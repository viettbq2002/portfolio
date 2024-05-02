import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form onSubmit={() => {
        alert("This function not implement yet, try another way to contact me :)")
      }} className="flex   flex-col gap-5 shadow-lg p-4 bg-white">
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
