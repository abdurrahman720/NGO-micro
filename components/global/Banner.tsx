"use client";
import Image from "next/image";
import React, { useState } from "react";
import bannerImage from "/public/hero.jpg";
import Select from "react-select";

import { Button } from "../ui/button";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full h-[70vh] relative z-[10]">
      <Image src={bannerImage} alt="Banner Image" fill objectFit="cover" />
      <div className="aboslute top-0 left-0 bottom-0 right-0 bg-black z-50 h-[70vh] w-full opacity-20"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-[70vh] z-[100]">
        <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/2  lg:-translate-x-1/2 flex flex-col justify-center items-center gap-4 lg:max-w-4xl z-[10]">
          <h1 className="text-white text-h1 text-center ">
            {"Let's Help Those Who Are More In Need"}
          </h1>

          <p className="text-p text-white text-center">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae ullam, odio consectetur consequatur sit hic architecto minus dignissimos voluptatibus!"
            }
          </p>
          <Button size={"lg"}>Explore</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
