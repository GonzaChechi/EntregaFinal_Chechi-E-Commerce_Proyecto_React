import './styles/App.css'
import { Navbar } from './components/NavBar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <ItemListContainer mensaje={"La tecnología que buscas"} subMensaje={"Esta a tu alcance"}/>
    </div>
  );
}
