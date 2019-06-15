import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import { Container } from "../elements/Container";
import styled from "styled-components";

const currentYear = moment().format("YYYY");

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
  /* border-top: medium double linear-gradient(#e66465, #9198e5); */
  border-top: solid 3px transparent;
  border-image: linear-gradient(#e66465, #9198e5);
  /* border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%; */
  color: #333;
  text-align: center;
`;

export function Footer() {
  return (
    <SiteFooter>
      <Container>
        <SiteFooterContent>
          <Divider />
          <p>
            &copy; {currentYear} &mdash; <Link to="/">ryan rampersad</Link>{" "}
            &mdash; <Link to="/made-by-ryan">made by ryan</Link>
          </p>
        </SiteFooterContent>
      </Container>
    </SiteFooter>
  );
}
