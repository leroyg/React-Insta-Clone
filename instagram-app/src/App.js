import React from 'react';
import './font.css';
import './App.css';
import './components/PostContainer/postContainer.css'
import './components/CommentSection/CommentSection.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
    state = {
  data: [],

  filteredSearch: []
    
}

  componentDidMount() {
    this.setState({
      data: dummyData
    })
}

onSearch=(searchTerm)=>{
   let userNames = this.state.data.filter(userName =>{
   return  userName.username.toLowerCase().includes(searchTerm.toLowerCase())}
   );
 
   this.setState({
     filteredSearch: userNames
   });
  }
  
  
render() {
    return (
      <div>
        <div>
          <SearchBar  onSearch={this.onSearch} />
        </div>

        <div className="App">
          <PostContainer
           data={
            this.state.filteredSearch.length > 0
                ? this.state.filteredSerach
                : this.state.data
        }

    />
      </div>
      </div>
    );}
}

export default App;
