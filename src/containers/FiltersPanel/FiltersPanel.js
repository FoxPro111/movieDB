import React, { useState } from "react";
import "./FiltersPanel.scss";
import { connect } from "react-redux";

const FiltersPanel = props => {
  const { genres } = props;

  const [filters, setFilters] = useState({
    search: "",
    genres: [],
    years: [],
    rating: []
  });

  const handleFormSubmit = () => {
    console.log("test submit");
  };

  const onInputChange = (event, type) => {
    event.preventDefault();
    const value = event.target.value;

    switch (type) {
      case "genre": {
        const genres = [...filters.genres];
        const index = genres.indexOf(value);

        if (index === -1) {
          genres.push(+value);

          setFilters({
            ...filters,
            genres: genres
          });
        } else {
        }

        break;
      }

      case "search": {
        setFilters({
          ...filters,
          search: event.target.value
        });

        break;
      }
    }
  };

  let genreOutput = null;

  if (genres.length) {
    const genresList = genres.map(genre => {
      const checked = filters.genres.indexOf(genre.id) !== -1;

      console.log(filters.genres, filters.genres.indexOf(genre.id) !== -1);

      return (
        <div key={genre.id} className="filters__checkbox">
          <input
            type="checkbox"
            name="genre"
            value={genre.id}
            checked={checked}
            id={`genre-${genre.id}`}
            onChange={event => onInputChange(event, "genre")}
          />
          <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
        </div>
      );
    });

    genreOutput = (
      <div className="filters__item filters__item--checkboxes">
        <div className="filters__name">Genre:</div>
        <div className="filters__checkboxes">{genresList}</div>
      </div>
    );
  }

  return (
    <div className="filters">
      <form onSubmit={handleFormSubmit}>
        {/* search */}
        <div className="filters__item filters__item--search">
          <div className="filters__name">Search:</div>
          <div className="filters__input">
            <input
              type="search"
              placeholder="Film name"
              value={filters.search}
              onChange={event => onInputChange(event, "search")}
            />
          </div>
        </div>
        {/* genre */}
        {genreOutput}
        {/* rating */}
        <div className="filters__item filters__item--checkboxes">
          <div className="filters__name">Rating:</div>
          <div className="filters__checkboxes">
            <div className="filters__checkbox">
              <input
                type="checkbox"
                name="rating"
                value="one"
                onChange={event => onInputChange(event, "rating")}
              />
              <label>1</label>
            </div>
            <div className="filters__checkbox">
              <input
                type="checkbox"
                name="rating"
                value="two"
                onChange={event => onInputChange(event, "rating")}
              />
              <label>2</label>
            </div>
          </div>
        </div>
        {/* Years */}
        <div className="filters__item filters__item--checkboxes">
          <div className="filters__name">Years:</div>
          <div className="filters__checkboxes">
            <div className="filters__checkbox">
              <input
                type="checkbox"
                name="years"
                value="one"
                onChange={event => onInputChange(event, "years")}
              />
              <label>1</label>
            </div>
            <div className="filters__checkbox">
              <input
                type="checkbox"
                name="years"
                value="two"
                onChange={event => onInputChange(event, "years")}
              />
              <label>2</label>
            </div>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(mapStateToProps)(FiltersPanel);
