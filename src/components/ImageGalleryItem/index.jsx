import React from "react";
import propTypes from "prop-types";
import {
  StyledImageGalleryItem,
  ImageGalleryItemImg,
} from "./styledImageGalleryItem";

const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return pictures.map(({ id, webformatURL, largeImageURL }) => (
    <StyledImageGalleryItem key={id} className="ImageGalleryItem">
      <ImageGalleryItemImg
        src={webformatURL}
        alt=""
        data-set={largeImageURL}
        className="ImageGalleryItem-image"
        onClick={onOpenModal}
      />
    </StyledImageGalleryItem>
  ));
};

ImageGalleryItem.propTypes = {
  pictures: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string,
    })
  ).isRequired,
  onOpenModal: propTypes.func.isRequired,
};

export default ImageGalleryItem;
