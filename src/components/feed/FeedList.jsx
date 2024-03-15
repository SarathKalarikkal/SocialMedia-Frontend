import React from 'react'
import FeedItem from './FeedItem'

function FeedList(props) {
  return (
    <>
    {props.posts.map((post)=>{
     return <FeedItem  post={post}/>
    })}
    </>
  )
}

export default FeedList
