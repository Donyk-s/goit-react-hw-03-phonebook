import React from 'react';
import PropTypes from 'prop-types';
import css from './FilterStyle.module.css';

const Filter = ({ filter, onChangeInput }) => {
  const handleFilterChange = event => {
    onChangeInput(event.target.value);
  };

  return (
    <>
      <label className={css.labelInput}>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={handleFilterChange}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;
