import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import PT from './pages/PT';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Review from './pages/Review';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Customer from './pages/Customer';
import Farmer from './pages/Farmer';
import AddProduct from './pages/AddProduct';
import Orders from './pages/Orders';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        {/* <Route path="/pt" element={<PT />} /> */}
        <Route path='/about' element={<AboutUs />} />
        <Route path='/review' element={<Review />} />
        <Route path='/register' element={<Register />}  />
        <Route path='/dashboard' element={<Dashboard />}  />
        <Route path='/products' element={<Product/>}  />
        <Route path='/customers' element={<Customer/>}  />
        <Route path='/farmers' element={<Farmer/>}  />
        <Route path='/addProduct' element={<AddProduct/>}  />
        <Route path='/orders' element={<Orders/>}  />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;


