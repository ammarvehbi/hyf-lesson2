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
        title: "No you can't answer - THe Film",
        desc: "helllooo",
        rating: 0,
        genre: ""
      },
      genres: ["action", "comedy", "SCIENFECE FICTION", "ROMANCE"]
    };
  }

  handleChange = e => {
    const { formData } = this.state;
    const { value, name } = e.target;
    formData[name] = value;
    this.setState({
      formData: formData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { formData, genres } = this.state;
    const { desc, title, genre, rating } = formData;

    return (
      <React.Fragment>
        My Form:
        <HyfForm handleSubmit={this.handleSubmit}>
          <HyfInput
            name="title"
            type="text"
            placeholder="Please enter a FUCKING TITLE"
            label="title"
            handleChange={this.handleChange}
          />
          <HyfInput
            name="desc"
            type="text"
            placeholder="Please enter a fucking desc"
            label="Description"
            handleChange={this.handleChange}
          />
          <HyfInput
            name="rating"
            type="number"
            placeholder="Rating"
            label="Rating"
            handleChange={this.handleChange}
          />
          <HyfSelect
            handleChange={this.handleChange}
            options={genres}
            name={"genre"}
          />
          <HyfInput
            type="submit"
            name="button"
            value="here is a my save button"
            buttonTitle="Save"
          />
        </HyfForm>
        My Form Data:
        <div>title: {title}</div>
        <div>desc: {desc}</div>
        <div> rating: {rating}</div>
        <div>genre: {genre}</div>
      </React.Fragment>
    );
  }
}

export default App;
