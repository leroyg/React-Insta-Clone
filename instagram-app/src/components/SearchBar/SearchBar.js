import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {

render() {
    return (
      <div className="searchBarMain">
        <div className="searchBarComponentLeft">
          <img
            alt="instagramPhoto"
            src="http://www.vectorico.com/download/social_media/Instagram-Logo.png"
          />
          <h1>InstaCloneGram</h1>
        </div>

        <input
          type="search"
          name="search"
          placeholder="Search"
        />

        <div className="searchBarComponentRight">
          <i className="far fa-compass fa-2x" />
          <i className="fab fa-gratipay  fa-2x" />
          <i className="far fa-user  fa-2x" />
        </div>
      </div>
    );
  }
}

export default SearchBar;