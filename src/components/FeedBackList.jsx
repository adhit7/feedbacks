import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import  FeedbackContext  from '../contexts/FeedbackContext'

function FeedBackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext)
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedBackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default FeedBackList