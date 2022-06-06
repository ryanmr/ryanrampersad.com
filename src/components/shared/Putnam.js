import React from "react";

export function Putnam() {
  const content = `
<!--
  PUTNAM.
-->
`;

  return (
    <>
      <meta
        name="putnam"
        data-type="base64-encoded"
        content="VGhlIHNlY3JldCBjb2RlIGlzOiBDaGVldGFoLg=="
      />
      <noscript dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
