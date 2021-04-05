import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.imageURL}
          alt=""
          className="ImageGalleryItem-image"
          data-large-image={this.props.largeImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
