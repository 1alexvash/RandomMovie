import React, { Fragment } from "react";

const Description = ({ title, loading }) =>
  title === undefined && loading === false ? (
    <Fragment>
      <div className="about">Find a great movie!</div>
      <div className="purpose">
        Have you ever wonder not knowing how to spend your free evening? We do
        and know we've got your evening covered. Just fill the form whatever you
        feel like to watch for example horror and we'lll find something for ya!
      </div>
    </Fragment>
  ) : (
    ""
  );

export default Description;
