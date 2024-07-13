import React from "react";
import SectionLayout from "../../layout/SectionLayout";
import SectionHeader from "../../SectionHeader";
import Card from "./Card";
import food from "/public/food.png";
import shelter from "/public/shelter.png";
import education from "/public/paper.png";

type Props = {};

const DonatePlan = (props: Props) => {
  return (
    <SectionLayout>
      <SectionHeader
        heading="Donate Plan"
        
      />
      <div className="flex justify-center items-center gap-10">
        <Card image={food} title="Food For a Family" i={1 as number} />
        <Card image={shelter} title="Shelter For a Family" i={2 as number} />
        <Card
          image={education}
          title="Education For a children"
          i={3 as number}
        />
      </div>
    </SectionLayout>
  );
};

export default DonatePlan;
