import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
  render() {
    const { postId } = this.props.params
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId)
    // get us the post
    const post = this.props.posts[i]
    // get the comments and display none if there arent any
    const postComments = this.props.comments[postId] || []

    return(
      <div className='single-photo'>
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single
