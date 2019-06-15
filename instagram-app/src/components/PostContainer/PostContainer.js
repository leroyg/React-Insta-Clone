import React from 'react';
import data from '../dummy-data.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [],
        }
}

componentDidMount(){
    this.setState({
        names: this.props.data
    }); 
}

render() {
    return (
      <div>
          {data.map(
            (post, i) => {
                return (
                    <div key={post.timestamp} className='postContainer'>

                    <div className="post-header"> 
                    <h2> 
                        <img alt={post.id} src={post.thumbnailUrl}/>
                        {post.username}
                    </h2>
                    </div>

                    <img className='post-img' alt={post.id} src={post.imageUrl}/>

                    </div>
                )
            }
          )}
      </div>
    );
  }
}

export default PostContainer;