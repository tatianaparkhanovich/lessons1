//import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { User } from './components/User/User'
import { Home } from './components/Home/Home'
import Layout from './Layout'
import { NotFound } from './components/NotFound/NotFound'
import { Users } from './components/Users/Users'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home title="its Home Page" />} />
          <Route path="users/:id" element={<User />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App
