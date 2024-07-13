import React, { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const DonateButton = ({ children, type }: Props) => {
  return (
    <Button type={type ? type : "button"} size={"lg"} className="font-bold">
      {children}
    </Button>
  );
};

export default DonateButton;
