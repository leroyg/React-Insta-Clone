import React from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons'

const compassElement = <FontAwesomeIcon size="2x" icon={faCompass} type="i"/>;
const gratiElement = <FontAwesomeIcon size="2x" icon={faGratipay} type="i" />;
const userElement = <FontAwesomeIcon size="2x" icon={faUser} type="i" />;
// const searchElement = <FontAwesomeIcon size="2x" icon={faSearch} type="i" />

class SearchBar extends React.Component {

    state = {
		searchTerm: ""
	};
onFormSubmit=(event)=>{
  event.preventDefault()
  this.props.onSearch(this.state.searchTerm)
}

   render(){
    return (
      <div className="searchBarMain">
        <div className="searchBarComponentLeft">
          <img
            alt="instagramPhoto"
            src="http://www.vectorico.com/download/social_media/Instagram-Logo.png"
          />
          <h1>InstaCloneGram</h1>
        </div>

        <form onSearch = {this.onSearch}>
        <input
          type="search"
          name="search"
          placeholder=' Search'
          value={this.state.searchTerm} 
          onChange={(event)=> this.setState({term:event.target.value}) }  />

</form>

        <div className="searchBarComponentRight">
        {compassElement}
          <i className="fab fa-gratipay  fa-2x"/>
          {gratiElement}
          <i className="far fa-user  fa-2x" />
          {userElement}
        </div>
      </div>
    );
  }
}

export default SearchBar;