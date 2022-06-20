import CartItem from "./CartItem";
import { useSelector , useDispatch} from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {

    const dispatch = useDispatch()


  //destructuring state obj
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
            ///using spread operator to pass props to the CartItem component
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr/>
        <div className="cart-total">
        <h4>
            total <span>${total}</span>
        </h4>
        </div>
        <button className="btn clear-btn" onClick={() => {dispatch(openModal())}}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;