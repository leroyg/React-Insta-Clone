import React, { Component } from 'react';

class AddComment extends Component {
    state = {
        text: "",
        updateScreen: false
    };

// display difference between new comment and submitted comment text

    handleUpdateScreen = () => {
        // flag the ternery operator on the state of update screen
        this.setState({
            updateScreen: !this.state.updateScreen
        });
    };

    changeHandler = event => {
        // takes the user text and adds it to the state
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitComment = event => {
        event.preventDefault();
        //clears the comment box
        this.setState({
            text:''
        });

        this.props.addComment(event, this.state.text);
    };

    render() {
        return (
          //calls the event on method submitComment
          <form className="inputs" onSubmit={this.submitComment}>
            <input
              type="text"
              name="text"
              //calls changeHandler method
              onChange={this.changeHandler}
              //update state
              value={this.state.text}
              placeholder="Add a comment ..."
            />{" "}
            <btn
              /// ternery flag for updateScreen
              className={this.state.updateScreen ? "btn blue" : "btn black"}
              //ternery eventListener change to active
              onClick={this.updateScreen}
            >
              {" "}
              Send{" "}
            </btn>{" "}
          </form>
        );
      }
    }
export default AddComment;