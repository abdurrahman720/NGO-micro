import React from "react";

type Props = {};

const GlanceCard = (props: Props) => {
  return (
    <div className="bg-white shadow-lg ring-[0.1px]  ring-secondary rounded-md w-[250px] h-[140px] relative group cursor-pointer ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:top-[25%] group-hover:-translate-y-[25%] w-full  transition-all delay-150">
        <h2 className="text-h2 text-secondary font-extrabold">11,106</h2>
        <p className="text-p text-secondary">District</p>
      </div>
    </div>
  );
};

export default GlanceCard;
