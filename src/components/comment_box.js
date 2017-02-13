import React, { Component } from 'react' 

export default class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <textarea cols="30" rows="10"></textarea>
        <button>Add Comment</button>
      </div>
    )
  }
}