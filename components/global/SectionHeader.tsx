import React from "react";

type Props = {
  heading: string;
};

const SectionHeader = ({ heading }: Props) => {
  return (
    <div className="flex flex-col gap-5 text-center max-w-4xl mx-auto ">
      <h1 className="text-h1 text-primary">{heading}</h1>
      <hr />
    </div>
  );
};

export default SectionHeader;
