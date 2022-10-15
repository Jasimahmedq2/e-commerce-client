import { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "./Store/Store";

export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
   
    <div >

       <div className="flex justify-around">
        {
          cartItems.length === 0 ? (
            <h2>cart item is empty <Link to='/' className="btn-sm btn-ghost">shopping</Link></h2>
          ) :
          (
            <div className="flex justify-center items-center sm:w-1/2">
              {
                cartItems.map((item) => (
                  <div className="flex">
                    <img style={{width: '50px', height: '50px'}} src={item.image} alt="" />
                    <h2>{item.category}</h2>
                    <Link to={`/details/${item._id}`}>{item.category}</Link>
                    
                 <button className="btn-sm btn-ghost" disabled={item.quantity === 1}>-</button>
                 <span>{item.quantity}</span>
                 <button className="btn-sm btn-ghost" disabled={item.quantity === item.countStock}>+</button>
                 <button className="btn btn-primary">delete</button>
                  </div>
              
                ))
              }
            </div>
         
          )
            }
            <div className="sm:w-1/3">
              <h2>
                subtotal ({cartItems.reduce((a, c) => a + c.quantity,0)} {' '}
                items) : ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </h2>
              <button className="btn btn-primary">proceed to checkout</button>
            </div>
       </div>
    
    </div>
  );
}