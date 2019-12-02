import React, { Fragment } from "react";
import ReferralLinksData from "../../data/referral-links.yaml";
import styled from "styled-components";
import {
  FullHero,
  HeroBody,
  Container,
  SectionTitle,
} from "@ryanrampersad/ryan-components";

const PromoList = styled.dl`
  max-width: 32rem;
  margin: 0 auto;
`;
const PromoName = styled.dt`
  margin-left: 0;
`;
const PromoDesc = styled.dd`
  font-size: 0.9rem;
  margin-left: 0;
  margin-bottom: 1rem;
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
                  <a href={link.url}>
                    <b>{link.name}</b>
                  </a>
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
