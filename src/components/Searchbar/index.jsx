import React, { Component } from "react";
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormSpan,
  StyledSearchFormInput,
} from "./styledSearchBar";

export default class Searchbar extends Component {

  state = {
    query: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      query: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };

  render() {
    const { query } = this.state;
    return (
      <StyledSearchbar className="Searchbar">
        <StyledSearchForm onSubmit={this.onSubmit} className="SearchForm">
          <StyledSearchFormButton type="submit" className="SearchForm-button">
            <StyledSearchFormSpan className="SearchForm-button-label">Search</StyledSearchFormSpan>
          </StyledSearchFormButton>

          <StyledSearchFormInput
            className="SearchForm-input"
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
