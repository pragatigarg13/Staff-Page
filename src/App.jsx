import './App.css'
import './Header.css'
import { Route, Routes } from 'react-router-dom'
import Login from './route/Login'
import HomePage from './route/HomePage'
import AboutPage from './route/AboutPage'
import ContactPage from './route/ContactPage'
import ConnectPage from './route/ConnectPage'
import NavFooter from './NavFooter'
import SignUp from "./route/SignUp";
import ProfilePage from './ProfilePage'

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<NavFooter />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App