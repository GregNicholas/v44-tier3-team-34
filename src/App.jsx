import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import GlobalStyle from './globalStyles';

// theme styles can be used in components wrapped in ThemeProvider
const theme = {
  colors: {
    navy: "#2F374B",
    green: "#1EB88D",
    lightGreen: "#C0E862",
    darkBlue: "#0D1C2E",
    white: "#FFFFFF",
    grey: "#222A3E",
    primary5: "#F4FBF9",
    danger: "#F13F4A",
  }
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </div>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
