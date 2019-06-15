import React from "react";
import moment from "moment";
import styled from "styled-components";

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
  const monthDisplay = moment(log.when).format("MMMM");
  const dateFragmentDisplay = moment(log.when).format("YYYY-MM");
  const weekNumber = moment(log.when).diff(moment("2016-03-31"), "weeks");
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
