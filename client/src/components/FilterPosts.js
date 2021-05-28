import React from 'react';

const FilterPosts = ({ setsearch }) => {
  const handleSearch = (value) => {
    setsearch(value);
  };

  return (
    <>
      <form className='filter-form'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search posts...'
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            required
          />
        </div>
      </form>
    </>
  );
};

export default FilterPosts;
