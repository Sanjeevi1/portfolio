"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Education = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading ">
        <span className="text-purple">        My Education
        </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10" id="education">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"

          />
        </div>


      </div>
    </section>
  );
};

export default Education;
