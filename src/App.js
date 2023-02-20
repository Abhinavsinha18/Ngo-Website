import './App.css';
// import NavbarWeb from './Components/Navbar/NavbarWeb';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Footer from './Components/footer/Footer';
import ProductDetail from './Components/Product Des/ProductDetail';

function App() {
  return (
    <div className="App">
   {/* <NavbarWeb/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
