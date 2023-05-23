
import '../App.css';
import { useEffect, useState } from 'react';
import { Banner } from './Banner';
import logo from "../assets/cube.png"
import { Bag } from './Bag';
import ItemList from './ItemList';
import { Footer } from './Footer';

function App() {
  const savedBag = localStorage.getItem('bag')
  const [bag, updateBag] = useState(savedBag ? JSON.parse(savedBag) : [])
  useEffect(() => {
    localStorage.setItem('bag',JSON.stringify(bag))
  }, [bag])
  return (
    <div>
      <Banner>
        <img src={logo} alt='logo-cube-gaming' className='logo'/>
        <h1 className='titre'>Cube Gaming</h1>
      </Banner>
      <div className='cg-layout-inner'>
        <Bag bag={bag} updateBag={updateBag}/>
        <ItemList bag={bag} updateBag={updateBag}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
