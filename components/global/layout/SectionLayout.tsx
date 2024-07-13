import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionLayout = (props: Props) => {
  return (
    <div className="my-20 md:my-40 px-10  w-full mx-auto flex flex-col gap-5">
      {props.children}
    </div>
  );
};

export default SectionLayout;
