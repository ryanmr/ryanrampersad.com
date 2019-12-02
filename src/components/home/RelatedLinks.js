import React from "react";
import RelatedLinksData from "../../data/related-links.yaml";
import styled from "styled-components";
import {
  FullHero,
  HeroBody,
  Container,
  SectionTitle,
  Row,
  Column,
  UnstyledList,
} from "@ryanrampersad/ryan-components";

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
          <Row>
            {RelatedLinksData.groups.map((group) => (
              <Column size={1 / 3} key={group}>
                <UnstyledList>
                  {getLinksByGroup(group).map((link) => (
                    <ListItem key={link.name}>
                      <MyLink href={link.url}>{link.name}</MyLink>
                    </ListItem>
                  ))}
                </UnstyledList>
              </Column>
            ))}
          </Row>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
