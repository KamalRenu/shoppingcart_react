import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Cart from './Cart';
import {useState} from 'react';

function App() {
  const [products,setProducts] = useState([
    {
      id : 1,
      title:"Samsung",
      image : "http://placehold.it/300x300?text=Samsung",
      price : 39999
    },
    {
      id : 2,
      title:"iPhone",
      image : "http://placehold.it/300x300?text=iPhone",
      price : 39999
    },
    {
      id : 3,
      title:"MotoG",
      image : "http://placehold.it/300x300?text=MotoG",
      price : 39999
    }
  ])

  const [cartItems,setCartItems]=useState([])
  const [total,setTotal]=useState(0)

  let handleAddToCart = (product)=>{
    setCartItems([...cartItems,product])
    setTotal(total+product.price)
  }

  let handleRemoveCart = (product)=>{
    setTotal(total-product.price)
    let removedItem = cartItems.filter(obj=>obj.id !== product.id);
    setCartItems([...removedItem])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className='row'>
            {
              products.map((product)=><Card productData={product} cartItems={cartItems} handleAddToCart={handleAddToCart}></Card>)
            }
          </div>
        </div>
        <div className='col-lg-4'>
          <h3>Cart</h3>
          <Cart cartItems={cartItems} handleRemoveCart={handleRemoveCart}/>
          <h3>Total - Rs.{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
