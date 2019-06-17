import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const heartElement = <FontAwesomeIcon size="1x" icon={faHeart} type="i"/>;

const faCommentIcon = <FontAwesomeIcon size="1x" icon={faComment} type="i"/>;

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
            
            {heartElement}

            <i className = {this.state.like ? "fas fa-heart red" : "far fa-heart fa-sm"
            }
            onClick = {this.HeartClick}
            />
            {faCommentIcon}
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