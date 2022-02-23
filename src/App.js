import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './contexts/FeedbackContext'

function App() {
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedBackForm />
                <FeedBackStats />
                <FeedBackList />
              </>
            }></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
        
      </Router>
    </FeedbackProvider>
  )
}

export default App