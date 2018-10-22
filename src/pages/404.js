import React from "react";
import Helm from "../components/shared/Helm";
import GeneralLayout from "../components/layout/GeneralLayout";

const NotFoundPage = () => (
  <GeneralLayout>
    <div className="columns is-centered">
      <div className="column is-three-fifths has-text-centered">
        <Helm>
          <title>Not Found</title>
        </Helm>
        <div className="content">
          <h1>Not Found</h1>
          <p>
            You're lost.
            <br />
            <a href="https://twitter.com/ryanmr">Maybe I can help</a>.
          </p>
        </div>
      </div>
    </div>
  </GeneralLayout>
);

export default NotFoundPage;
