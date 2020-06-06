import React, { Component } from "react";
import Loader from "react-loader-spinner";
import apiService from "../../services/apiService";
import Searchbar from "../Searchbar/index";
import ImageGallery from "../ImageGallery/index";
import LoadMoreButton from "../LoadMoreButton/button";
import ImageGalleryItem from "../ImageGalleryItem/index";
import { StyledApp } from "./styledApp";
import Modal from "../Modal/index";

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    isModalOpen: false,
    query: "",
    selectedImage: null,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  handleOpenModal = ({ target: { dataset } }) => {
    this.setState({
      selectedImage: dataset.set,
      isModalOpen: true,
    });
  };

  handleCloseModal = ({ code, target }) => {
    if (code === "Escape" || target.dataset.set === "overlay") {
      this.setState({ isModalOpen: false });
    }
  };

  handleSubmit = (searchQuery) => {
    this.setState({ query: searchQuery, isLoading: true });
    apiService.resetPage();
    apiService
      .queryArticles(searchQuery)
      .then((hits) =>
        this.setState({
          pictures: [...hits],
        })
      )
      .catch((err) => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleClick = () => {
    this.setState({ isLoading: true });
    apiService
      .queryArticles(this.state.query)
      .then((hits) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...hits],
        }));
        if (apiService.page > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  render() {
    const { pictures, isLoading, isModalOpen, selectedImage } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {pictures.length > 0 && (
          <>
            <ImageGallery>
              <ImageGalleryItem
                pictures={pictures}
                onOpenModal={this.handleOpenModal}
              />
            </ImageGallery>
            <LoadMoreButton onHandleClick={this.handleClick} />
          </>
        )}

        {isModalOpen && (
          <Modal picture={selectedImage} onCloseModal={this.handleCloseModal} />
        )}
      </StyledApp>
    );
  }
}
