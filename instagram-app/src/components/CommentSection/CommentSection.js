import React, { Component } from 'react';
import AddComment from './AddComment';
import PropTypes from 'prop-types';

class Comments extends Component {
    state = {
        comments: this.props.comments
    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments
        })
    }

    addComment = (event, text) => {
        event.preventDefault();
        const newComment = {
            username: "leroyg",
            text: text
        };

        this.setState({
            comments: [...this.state.comments, newComment]
        });
    };

    render() {

        return (
            <div className = 'comment-section'>
            {   this.state.comments.map(
                (oneComment) => {

                    return (
                        <div className = 'comments' key = {oneComment.text}>
                        <h2> {oneComment.username}
                        <span> {oneComment.text}</span>
                        </h2>
                        </div>)
                }
            )} <AddComment addComment = {this.addComment}  comment = {this.state.comments} />
            </div>
        );}
    }

        Comments.propTypes = {
            comments: PropTypes.array.isRequired
        };

        export default Comments;
