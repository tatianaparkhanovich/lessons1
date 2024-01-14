//import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { User } from './components/User/User'
import { Home } from './components/Home/Home'
import Layout from './Layout'
import { NotFound } from './components/NotFound/NotFound'
import { Users } from './components/Users/Users'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home title="its Home Page" />} />
        <Route path="users/:id" element={<User />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
