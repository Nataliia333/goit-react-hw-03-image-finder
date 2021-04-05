import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  handleImageClick = event => {
    this.props.onImageClick(event.target.id);
  };

  render() {
    return (
      <ul onClick={this.handleImageClick}>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            imageURL={webformatURL}
            largeImage={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
