import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './MeeshoCompo/Navbar';
import Home from './MeeshoCompo/Home';
import Footer from './MeeshoCompo/Footer';
import Login from './MeeshoCompo/Login';
import Register from './MeeshoCompo/Register';
import Allproducts from './MeeshoCompo/Allproducts';
import Singleproduct from './MeeshoCompo/Singleproduct';
import Cart from './MeeshoCompo/Cart';
import AddProduct from './MeeshoCompo/AddProduct';
import Profile from './MeeshoCompo/Profile';

function App() {
  return (
    <div >

<Navbar/>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/Login' element={<Login/>}/>
  <Route exact path='/Register' element={<Register/>}/>
  <Route exact path='/Allproducts' element={<Allproducts/>}/>
  <Route exact path='/Singleproduct/:id' element={<Singleproduct/>}/>
  <Route exact path='/Cart' element={<Cart/>}/>
  <Route exact path='/AddProduct' element={<AddProduct/>}/>
  <Route exact path='/Profile' element={<Profile/>}/>
  
  
  </Routes>
  <Footer/>
      
    </div>
  );
}

export default App;
