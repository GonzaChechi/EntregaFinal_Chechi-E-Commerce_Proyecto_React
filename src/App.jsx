import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { ItemDetailsContainer } from './components/ItemsDetailsContainer/ItemDetailsContainer';
import { NotFound } from './components/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';

export const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <ToastContainer  />
        <Routes>
          <Route path='/' element={<>
            <Hero />
            <ItemListContainer />
          </>} />
          <Route path='/category/:catid' element={<ItemListContainer />} />
          <Route path='/product/:proid' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
