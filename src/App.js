import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import OrderSummary from './Component/OrderSummary';
import Product from './Component/Product';
import Users from './Component/Users';
import Detail from './Component/Detail';
import Admin from './Component/Admin';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='product' element={<Product/>}/>
    <Route path='order-summary' element={< OrderSummary />}/>
    <Route path='user' element= { < Users /> }/>
    <Route path='user/:userId' element={<Detail/>}/>
    <Route path='user/:userId' element={<Detail/>}/>
    <Route path='user/:userId' element={<Detail/>}/>
    <Route path='user/admin' element={ <Admin/> }/>
    </Routes>
    </div>
  );
}

export default App;
