import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.imageURL}
          alt=""
          className={styles.ImageGalleryItem_image}
          id={this.props.id}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
