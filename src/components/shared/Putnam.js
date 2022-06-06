import React from "react";

export function Putnam() {
  const content = `
<!--




PUTNAME SAYS...

THE CLUE YOU NEED IS ON GNOME ISLAND...


🏝
🏝🏝
🏝🏝🏝
🏝🏝🏝🏝
🏝🏝🏝🏝🏝
🏝🏝🏝🏝🏝🏝


-->
`;

  return (
    <>
      <noscript dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
