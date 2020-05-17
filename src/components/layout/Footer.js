import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container } from "@ryanrampersad/ryan-components";

const SiteFooter = styled.footer`
  font-size: 0.9rem;
  color: #999;
  padding: 5%;
`;

const SiteFooterContent = styled.footer`
  text-align: center;
`;

const Divider = styled.hr`
  padding: 0;
  border: none;
  border-top: solid 3px transparent;
  border-image: linear-gradient(#e66465, #9198e5);
  color: #333;
  text-align: center;
`;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <SiteFooter>
      <Container>
        <SiteFooterContent>
          <Divider />
          <p>
            &copy; {year} &mdash; <Link to="/">ryan rampersad</Link> &mdash;{" "}
            <Link to="/made-by-ryan">made by ryan</Link>
          </p>
        </SiteFooterContent>
      </Container>
    </SiteFooter>
  );
}
