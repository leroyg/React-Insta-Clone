import React, { Component } from "react";

class PostInteractions extends Component {
    state = {
        like: false
    };

    HeartClick = () => {
        //ternery flag for heart icon
        this.setState({ like: !this.state.like});
    };

    render() {
        return (
            //ternery for changing the css on the element in state
            <div className = "icons-container">

            <i className = {this.state.like ? "fas fa-heart fa-lg like" : "far fa-hear fa-sm"
            }
            onClick = {this.HeartClick}
            />

            <i className = "icon far fa-comment" />
            <h3>
                {//updates the like counters on the state to d
                this.state.like ? this.props.name.likes + 1 : this.props.name.likes}
            </h3>
            </div>
        );
    }
}

export default PostInteractions;