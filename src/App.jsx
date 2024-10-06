import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (

    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ErrorBoundary>
    </Router>

  )
}

export default App
