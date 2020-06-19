import React, { Component } from "react";
import "./AddPhoto.css";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (description && imageLink) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/");
    }
  }
  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Paste link here" name="link" />
            <input type="text" placeholder="Status" name="description" />
            <button> Post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
