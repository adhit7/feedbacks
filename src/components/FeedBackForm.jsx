import React, { useState } from 'react'
import Card from './Card'
import Button from './Button';
import RatingSelect from './RatingSelect'

function FeedBackForm({ handleAdd }) {

    const [text,setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            
            handleAdd(newFeedback)
            setText('')
        }
    }
    
    const handleChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleChange} value={text} />
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedBackForm