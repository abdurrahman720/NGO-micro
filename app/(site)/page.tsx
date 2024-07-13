import Image from "next/image";
import Banner from "../../components/global/Banner";
import DonateToday from "../../components/global/landing/DonateToday/donateToday";
import DonatePlan from "../../components/global/landing/DonatePlan/DonatePlan";
import Navbar from "../../components/global/layout/Navbar/Navbar";
import AtGlance from "@/components/global/landing/AtGlance/AtGlance";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Banner />
      <div className="hidden md:block">
        <AtGlance />
        <DonateToday />
        <DonatePlan />
      </div>
    </div>
  );
}
