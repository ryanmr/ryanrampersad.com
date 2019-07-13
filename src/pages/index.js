import React from "react";

import { TopSection } from "../components/home/TopSection";
import { Bio } from "../components/home/Bio";
import { Work } from "../components/home/Work";
import { RelatedLinks } from "../components/home/RelatedLinks";
import { ReferralLinks } from "../components/home/ReferralLinks";
import HomepageLayout from "../components/layout/HomepageLayout";
import { More } from "../components/home/More";

export default function HomepagePage() {
  return (
    <HomepageLayout>
      <TopSection />
      <Bio />
      <Work />
      <RelatedLinks />
      <ReferralLinks />
      <More />
    </HomepageLayout>
  );
}
