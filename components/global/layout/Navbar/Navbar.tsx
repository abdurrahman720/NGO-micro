"use client";
import React, { useEffect, useState } from "react";
import logo from "/public/uddipan-logo.png";
import MenuItem from "./MenuItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-[100]  transition-all delay-500">
      <div className={` bg-green-700 py-3 w-full px-5`}>
        <p className="text-white font-bold text-xs md:text-sm">
          Cell: +880 9612-778778, 16779 E-mail: info@uddipan.org
        </p>
      </div>

      <div
        className={`bg-white h-[100px] flex flex-row justify-between items-center fixed z-50  w-full px-10  ${
          isScrolled ? "top-0 shadow-md" : "md:top-10"
        }   transition-all delay-500 `}
      >
        {/* <Image src={logo} alt="logo" width={190} height={65} /> */}
        <div className="flex flex-col text-center">
          <h2 className="text-lg md:text-[25px] font-extrabold text-green-700">
            সমাজসেবায় এগিয়ে
          </h2>
          <h2 className="text-lg md:text-[25px]">আমরা </h2>
        </div>

        <div className="hidden md:flex items-center gap-4  ">
          <MenuItem />
          <MenuItem /> <MenuItem /> <MenuItem /> <MenuItem /> <MenuItem />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <i className="fa fa-search text-sm text-primary"></i>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute z-[100] right-10">
              <DropdownMenuItem>
                <div className="flex w-full max-w-lg items-center space-x-2">
                  <Input type="email" placeholder="Search" />
                  <i className="fa fa-search text-lg text-primary"></i>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="" />
            </SheetTrigger>
            <SheetContent className="absolute top-0 z-[150] h-screen">
              <div className="flex flex-col gap-4">
                <MenuItem />
                <MenuItem /> <MenuItem /> <MenuItem /> <MenuItem /> <MenuItem />
                <div className="flex w-full max-w-lg items-center space-x-2">
                  <Input type="email" placeholder="Search" />
                  <i className="fa fa-search text-lg text-primary"></i>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
