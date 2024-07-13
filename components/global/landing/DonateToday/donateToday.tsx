import React from "react";
import SectionHeader from "../../SectionHeader";
import DonateInput from "./DonateInput";
import SectionLayout from "../../layout/SectionLayout";

type Props = {};

const DonateToday = (props: Props) => {
  return (
    <SectionLayout>
      <SectionHeader heading="Donate Today" />

      <DonateInput />
    </SectionLayout>
  );
};

export default DonateToday;
