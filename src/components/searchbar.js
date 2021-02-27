import React from 'react';

function Search(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            placeholder="Search name"
            id="search"
          />
        </div>
      </form>
    );
  }
  
  export default Search;