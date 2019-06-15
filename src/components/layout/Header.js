import React from "react";
import { Link } from "gatsby";
import { Container } from "../elements/Container";
import { HomeTitle } from "../elements/SiteTitle";

export function Header() {
  return (
    <header>
      <Container>
        <HomeTitle as="h2">
          <Link to="/">Ryan Rampersad</Link>
        </HomeTitle>
      </Container>
    </header>
  );
}
