import React, { Fragment } from "react";
import ReferralLinksData from "../../data/referral-links.yaml";
import { FullHero, HeroBody } from "../elements/Hero";
import { Container } from "../elements/Container";
import { SectionTitle } from "../elements/Title";
import styled from "styled-components";

const PromoList = styled.dl``;
const PromoName = styled.dt`
  margin-left: 0;
`;
const PromoDesc = styled.dd`
  font-size: 0.9rem;
  margin-left: 0;
`;

export function ReferralLinks() {
  return (
    <FullHero id="referrals">
      <HeroBody>
        <Container
          css={`
            max-width: 80%;
            text-align: center;
          `}>
          <SectionTitle>Referrals</SectionTitle>
          <p>Consider using the following referral links.</p>

          <PromoList>
            {ReferralLinksData.links.map((link) => (
              <Fragment key={link.name}>
                <PromoName>
                  <a href={link.url}>{link.name}</a>
                </PromoName>
                <PromoDesc>{link.description}</PromoDesc>
              </Fragment>
            ))}
          </PromoList>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
