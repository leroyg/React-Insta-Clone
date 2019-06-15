import React from 'react';
import dummyData from '../../dummy-data';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [],
        }
}

componentDidMount(){
    this.setState({
        data: this.props.data
    }); 
}

render() {
    return (
      <div>
          {dummyData.map(
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