import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import PT from './pages/PT';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Review from './pages/Review';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        {/* <Route path="/pt" element={<PT />} /> */}
        <Route path='/about' element={<AboutUs />} />
        <Route path='/review' element={<Review />} />
        <Route path='/register' element={<Register />}  />
      </Routes>
    </Router>
  );
}

export default App;


