import React from "react";
import { Footer } from "./Footer";
import { SiteMeta } from "../shared/SiteMeta";
import { BaseLayout } from "./BaseLayout";
import { Ribbon } from "@ryanrampersad/ryan-components";

export default function HomepageLayout({ children }) {
  return (
    <>
      <BaseLayout>
        <SiteMeta />
        {children}
        <Footer />
        <Ribbon />
      </BaseLayout>
    </>
  );
}
