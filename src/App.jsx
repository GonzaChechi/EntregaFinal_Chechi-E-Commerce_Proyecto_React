import './styles/App.css'
import { Navbar } from './components/NavBar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Counter } from './components/Counter/counter';

export const App = () => {
  const handelOnAdd = ()=>{
    console.log("Producto añadido al carrito")
  }
  return (
    <div>
    <Navbar/>
    <Hero/>
    <ItemListContainer greeting={"La tecnología que buscas"}/>
    <Counter stock={5} onAdd={handelOnAdd}/>
    </div>
  );
}
