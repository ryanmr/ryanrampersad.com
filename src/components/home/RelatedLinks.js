import React from "react";
import RelatedLinksData from "../../data/related-links.yaml";
import { FullHero, HeroBody } from "../elements/Hero";
import { Container } from "../elements/Container";
import { SectionTitle } from "../elements/Title";
import { Grid, Third } from "../elements/Grid";
import { UnstyledList } from "../elements/List";
import { AnimatedLink } from "../elements/Link";
import styled from "styled-components";

function getLinksByGroup(group) {
  const links = RelatedLinksData.links;
  return links.filter((link) => link.group === group);
}

const ListItem = styled.li`
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    letter-spacing: 1px;
  }
`;

const MyLink = styled.a`
  display: block;
  text-decoration: none;
  font-family: Raleway, sans-serif;
`;

export function RelatedLinks() {
  return (
    <FullHero id="links">
      <HeroBody>
        <Container
          css={`
            text-align: center;
          `}>
          <SectionTitle>Find me just about everywhere</SectionTitle>
          <Grid>
            {RelatedLinksData.groups.map((group) => (
              <Third key={group}>
                <UnstyledList>
                  {getLinksByGroup(group).map((link) => (
                    <ListItem key={link.name}>
                      <MyLink href={link.url}>{link.name}</MyLink>
                    </ListItem>
                  ))}
                </UnstyledList>
              </Third>
            ))}
          </Grid>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
