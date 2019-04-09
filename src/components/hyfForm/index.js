import React from "react";

const hyfForm = props => {
  return <form onSubmit={props.handleSubmit}>{props.children}</form>;
};

export default hyfForm;
