import React from "react"
import Card from "./Card"
import { FaTimes } from 'react-icons/fa'

function FeedBackItem({ item, handleDelete }) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedBackItem