import React from "react";

import BooksData from "../data/books.yaml";

import Helm from "../components/shared/Helm";
import { Container } from "../components/elements/Container";
import { Grid, Half } from "../components/elements/Grid";
import { Padding } from "../components/elements/Space";
import GeneralLayout from "../components/layout/GeneralLayout";
import { SectionTitle } from "../components/elements/Title";
import styled from "styled-components";

import showdown from "showdown";
export const showdownConverter = new showdown.Converter();

export default function BooksPage(props) {
  return (
    <GeneralLayout>
      <Helm>
        <title>Book recommendedations</title>
        <meta
          name="description"
          content="Read good books in a nice list, ideal for software engineers,
              architects, managers, hackers and more."
        />
      </Helm>

      <Container>
        <Grid>
          <StickySection>
            <Padding>
              <SectionTitle>Book recommendations</SectionTitle>
              <p>
                Reading <i>books</i> is a great way to cut throught the endless
                sea of poorly written and unfocused articles online. They're
                curated, edited and maybe even coherent. Beyond learning "how to
                code", many high level pursuits, software engineering,
                arcitecture, management, principles, philosophy − these are
                often best found in <i>books</i>.
                <br />
                <br />
                It is not lost on me though, that despite increasingly searching
                out for these options, many go unfinished. Despite that, those
                books listed here are essentially recommended.
                <br />
                <br />
                Hopefully through these recommendedations, you can share in some
                of my favorite sources of knowledge around these topics.
                <br />
                <br />
                If you have a wonderful book recommendation for me,{" "}
                <a href="https://twitter.com/ryanmr">feel free to share</a>.
              </p>
            </Padding>
          </StickySection>
          <Half>
            <Padding>
              {BooksData.map((book) => (
                <div key={book.title}>
                  <h4>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {book.title}
                      <br />
                      <small>{book.author}</small>
                    </a>
                  </h4>
                  <NoteText>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: showdownConverter.makeHtml(book.note),
                      }}
                    />
                  </NoteText>
                </div>
              ))}
            </Padding>
          </Half>
        </Grid>
      </Container>
    </GeneralLayout>
  );
}

const NoteText = styled.p`
  font-size: 0.9rem;
  padding-left: 0.75rem;
  margin-left: 0.5rem;
  border-left: 2px solid #565656;
`;

const StickySection = styled(Half)`
  position: sticky;
  top: 0;
  align-self: flex-start;
  @media screen and (max-width: 48rem) {
    align-self: unset;
    position: unset;
  }
`;
