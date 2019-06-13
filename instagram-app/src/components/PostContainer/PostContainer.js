import React from 'react';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
}

render() {
    return (
      <div>
          This is going to be the image post
      </div>
    );
  }
}

export default PostContainer;