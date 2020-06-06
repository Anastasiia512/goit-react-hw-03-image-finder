import React from "react";
import propTypes from "prop-types";
import { StyledOverlay, StyledModal } from "./syledModal";

const Modal = ({ picture, onCloseModal }) => (
  <StyledOverlay onClick={onCloseModal} data-set="overlay" className="Overlay">
    <StyledModal className="Modal">
      <img src={picture} alt="" />
    </StyledModal>
  </StyledOverlay>
);

Modal.propTypes = {
  picture: propTypes.string.isRequired,
  onCloseModal: propTypes.func.isRequired,
};

export default Modal;
