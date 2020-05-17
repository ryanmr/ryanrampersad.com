import React from "react";
import styled from "styled-components";
import { format, differenceInWeeks, parseISO } from "date-fns";

const INITIAL_DATE = "2016-03-31";
const INITIAL_DATE_DATE = parseISO(INITIAL_DATE);

export const LogHeaderText = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;
export const LogHeaderTextLight = styled(LogHeaderText)`
  font-weight: normal;
  font-size: 0.9rem;
  font-family: monospace;
`;
export const LogHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function LogHeader({ log, showWeekNumbers }) {
  const when = parseISO(log.when);
  const monthDisplay = format(when, "MMMM");
  const dateFragmentDisplay = format(when, "yyyy-MM");
  const weekNumber = differenceInWeeks(when, INITIAL_DATE_DATE);
  return (
    <LogHeaderWrapper>
      <div>
        <LogHeaderText>{monthDisplay}</LogHeaderText>
      </div>

      <div>
        <LogHeaderTextLight as="h4">
          {dateFragmentDisplay}
          {showWeekNumbers && <span>&nbsp;&ndash; Week {weekNumber}</span>}
        </LogHeaderTextLight>
      </div>
    </LogHeaderWrapper>
  );
}
