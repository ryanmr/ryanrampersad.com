import React from "react";
import { Link } from "gatsby";
import { Container, BrandTitle } from "@ryanrampersad/ryan-components";

export function Header() {
  return (
    <header>
      <Container>
        <BrandTitle
          as="h2"
          css={`
            font-size: 4rem;
          `}>
          <Link to="/">Ryan Rampersad</Link>
        </BrandTitle>
      </Container>
    </header>
  );
}
