import './styles/App.css'
import { Navbar } from './components/NavBar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Item } from './components/Item/Item';

export const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Hero/>
    <ItemListContainer greeting={"La tecnología que buscas"}/>
    <Item product={{img:"https://http2.mlstatic.com/D_NQ_NP_683812-MLA48553700994_122021-O.webp", title:"Modulo J7 Prime", description:"Repuesto de pantatalla para Samsung J7 Prime", marca:"Samsung", price:18000,stock:10}}/>
    <Item product={{img:"https://http2.mlstatic.com/D_NQ_NP_683812-MLA48553700994_122021-O.webp", title:"Modulo J7 Prime", description:"Repuesto de pantatalla para Samsung J7 Prime", marca:"Samsung", price:18000,stock:10}}/>
    </div>
  );
}
