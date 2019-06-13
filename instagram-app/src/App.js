import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
    state = {
  data: [],

  componentDidMount() {
    this.setState({
      data: dummyData
    });
}

    }
  
render() {
    return (
      <div>
        <div>
          <SearchBar/>
        </div>

        <div className="App">
          <PostContainer/>
        </div>
      </div>
    );
  }
}

export default App;
