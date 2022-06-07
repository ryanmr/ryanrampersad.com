import React from "react";

export function Putnam() {
  const content = `
<!--




PUTNAME SAYS...

THE CLUE YOU NEED IS ON GNOME ISLAND...

...

..

https://mrputnamdungeon.netlify.app/

..

...

crank that sound

..

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
