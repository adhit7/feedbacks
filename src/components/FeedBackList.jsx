import React from 'react'
import FeedBackItem from './FeedBackItem'

function FeedBackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default FeedBackList