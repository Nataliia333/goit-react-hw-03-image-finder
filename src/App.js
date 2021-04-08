import React, { Component } from 'react';
import imagesApi from './services/apiService';
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import './App.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    currentImg: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMoreButtonShow = () => {
    return this.state.images.length > 0;
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = index => {
    this.setState({
      currentImg: this.state.images.filter(({ id }) => id === Number(index)),
    });
    this.toggleModal();
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        />
        {this.state.isLoading && <Loader />}
        {this.onLoadMoreButtonShow() && !this.state.isLoading && (
          <Button onSubmit={this.fetchImages} />
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            img={this.state.currentImg[0].largeImageURL}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
