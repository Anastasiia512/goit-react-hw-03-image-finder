import React from "react";
import propTypes from 'prop-types';
import { StyledButton } from './StyledLoadButton';

const LoadMoreButton = ( {onHandleClick} ) => (
  <StyledButton type= 'button' onClick={onHandleClick}>Load more</StyledButton>
);

LoadMoreButton.propTypes ={
  onHandleClick: propTypes.func.isRequired
}

export default LoadMoreButton;
