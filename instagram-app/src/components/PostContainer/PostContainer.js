import React from 'react';
import dummyData from '../../dummy-data';
import Comments from '../CommentSection/CommentSection';
import PostInteractions from './PostInteractions';

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
                    <div key = {post.timestamp} className = 'postContainer'>

                    <div className = "post-header">
                    <div className = "post-thumbnail-container"> 
                    <img alt = {post.id} className="post-thumbnail-image" src = {post.thumbnailUrl}/>
                    </div>
                    <h2> 
                        {post.username}
                    </h2>
                    </div>

                    <img className = 'post-image' alt = {post.id} src ={ post.imageUrl}/>

                    <PostInteractions key = {i} name = {post}/>

                    <Comments key={post.username} comments={post.comments} />
                    </div>
                );
            })}
      </div>
    );
  }
}

export default PostContainer;