import React from "react";
import food from "/public/food.png";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  image: StaticImageData;
  i: number;
};

const Card = ({ title, image, i }: Props) => {
  console.log(i);
  return (
    <div
      className={`w-[350px] h-[350px]  pt-[50px] pr-5 pb-5 pl-5  flex flex-col items-start gap-5 ${
        i === 1
          ? "bg-[#4F9DA61A]"
          : i=== 2
          ? "bg-[#FF59591A]"
          : "bg-[#FFF4D6]"
      }`}
    >
      <Image src={image} alt="food" width={80} height={80} />
      <p className="text-p text-black ">{title}</p>
      <p className="text-p text-black">
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit quasi illo, vel sequi fugit blanditiis maxime dolor assumenda similique."
        }
      </p>
    </div>
  );
};

export default Card;
