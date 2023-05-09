import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import AdvancedSearch from './containers/AdvancedSearch'
import SimpleSearch from './containers/SimpleSearch'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='advancedsearch' element={<AdvancedSearch />} />
      <Route path='/' element={<SimpleSearch />} />
    </Routes>
  </BrowserRouter>
)