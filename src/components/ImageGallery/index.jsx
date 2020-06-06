import React from "react";
import { StyledImageGallery } from "./styledImageGallery";

const ImageGallery = ({ children }) => (
  <StyledImageGallery className="ImageGallery">{children}</StyledImageGallery>
);

export default ImageGallery;
