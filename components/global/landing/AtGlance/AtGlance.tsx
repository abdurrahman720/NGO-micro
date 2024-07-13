import React from "react";
import SectionLayout from "../../layout/SectionLayout";
import SectionHeader from "../../SectionHeader";
import GlanceCard from "./GlanceCard";

type Props = {};

const AtGlance = (props: Props) => {
  return (
    <SectionLayout>
      <SectionHeader heading="At a Glance" />

      <div className="grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-10">
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
        <GlanceCard />
      </div>
    </SectionLayout>
  );
};

export default AtGlance;
