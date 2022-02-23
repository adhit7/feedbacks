import React, { useContext } from "react"
import Card from "./Card"
import { FaEdit, FaTimes } from 'react-icons/fa'
import  FeedbackContext  from '../contexts/FeedbackContext'


function FeedBackItem({item}) {
  const { deleteFeedback,editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedBackItem