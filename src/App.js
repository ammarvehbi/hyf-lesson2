import React, { Component } from "react";

//Components
import HyfForm from "./components/hyfForm";
import HyfInput from "./components/hyfInput";
import HyfSelect from "./components/hyfSelect";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        title: "",
        desc: "",
        rating: 0,
        genre: ""
      },
      genres: ["action", "comedy", "SCIENFECE FICTION", "ROMANCE"]
    };
  }

  render() {
    const { genres } = this.state;
    return (
      <React.Fragment>
        My Form:
        <HyfForm>
          <HyfInput
            name="title"
            type="text"
            placeholder="Please enter a FUCKING TITLE"
            label="title"
          />
          <HyfInput
            name="description"
            type="text"
            placeholder="Please enter a fucking desc"
            label="Description"
          />
          <HyfInput
            name="rating"
            type="number"
            placeholder="Rating"
            label="Rating"
          />
          <HyfSelect options={genres} />
          <HyfInput
            type="submit"
            name="button"
            value="here is a my save button"
            buttonTitle="Save"
          />
        </HyfForm>
      </React.Fragment>
    );
  }
}

export default App;
