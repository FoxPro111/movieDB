import React, { useState } from "react";
import "./FiltersPanel.scss";
import { connect } from "react-redux";

import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
// import Range from 'react-range';
import Preloader from "../../components/UI/Preloader/Preloader";

import * as actions from "../../store/actions/index";

const FiltersPanel = props => {
  const { genres } = props;

  const [activeGenres, setSelectGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [years, setYears] = useState({ min: 2015, max: 2019 });

  const handleCheckboxChange = event => {
    const value = +event.target.value;
    const genres = [...activeGenres];
    const index = activeGenres.indexOf(value);
    const isSelected = index !== -1;

    if (isSelected) {
      genres.splice(index, 1);
    } else {
      genres.push(value);
    }

    setSelectGenres(genres);
  };

  const onSearchChange = event => {
    setSearch(event.target.value);
  };

  let genreOutput = null;

  if (genres.length) {
    const genresList = genres.map(genre => {
      const checked = activeGenres.indexOf(genre.id) !== -1;

      return (
        <React.Fragment key={genre.id}>
          <Checkbox
            name="genre"
            value={genre.id}
            checked={checked}
            label={genre.name}
            onChange={handleCheckboxChange}
          />
        </React.Fragment>
      );
    });

    genreOutput = (
      <div className="filters__item filters__item--checkboxes">
        <div className="filters__name">Genre:</div>
        <div className="filters__checkboxes">{genresList}</div>
      </div>
    );
  }

  const onFormSubmit = event => {
    event.preventDefault();

    const data = {
      search: search,
      genres: activeGenres
    };

    props.onSubmitHandler(data);
  };

  let filters = <Preloader />;

  if (false) {
    filters = (
      <form onSubmit={onFormSubmit}>
        <div className="filters__item filters__item--search">
          <div className="filters__name">Search:</div>
          <div className="filters__input">
            <Input
              placeholder="Film name"
              value={search}
              onChange={onSearchChange}
            />
          </div>
        </div>
        {/* <div className="filters__item filters__item--search">
            <div className="filters__name">Years:</div>
            <div className="filters__input">
              <Range 
                step={1}
                maxValue={2019}
                minValue={1990} 
                value={[50]}
                onChange={() => { console.log('test' )}} />
            </div>
          </div> */}
        {genreOutput}
        <Button type="submit">Search</Button>
      </form>
    );
  }

  return <div className="filters">{filters}</div>;
};

const mapStateToProps = state => {
  return {
    genres: state.filter.genres,
    loading: state.filter.loading,
    error: state.filter.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitHandler: searchData => dispatch(actions.searchMovies(searchData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersPanel);
