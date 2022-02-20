import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import AboutIconLink from './components/AboutIconLink';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage';

function App() {
  const [feedback,setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedBackForm handleAdd={addFeedback} />
              <FeedBackStats feedback={feedback}/>
              <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          }></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
      
    </Router>
  )
}

export default App