import React, { Component } from 'react';

class AddPhoto extends Component {
  constructor() {
    super();
    this.hadleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.link.description;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    };
    if (imageLink && description) {
      this.props.onAddPhoto();
    }
  }

  render() {
    return (
      <div>
        <h1> PhotoWall</h1>
        <div className="form">
          <form onSUbmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button> Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
