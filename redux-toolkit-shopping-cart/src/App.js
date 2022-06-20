import Navbar from "./components/Navbar.js";
import CartContainer from "./components/CartContainer.js";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal,getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal.js";
function App() {
  
  const { cartItems,isLoading } = useSelector((state) => state.cart);
  const modal = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{dispatch(getCartItems())},[])

  if(isLoading){
    return(<div className='loading'>
      <h1>Loading...</h1>
    </div>)
  }
  return (
    <main>
      {modal && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
