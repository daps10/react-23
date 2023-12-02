import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hook/useHttp";
import Error from "./Error";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function Checkout () {
  const cartCtx= useContext(CartContext);
  const userProgressCtx= useContext(UserProgressContext);

  // call useHTTP hook
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp(
    'http://localhost:3000/orders', 
    requestConfig
  );

  // total cart amount
  const cartTotal= cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + ( item.quantity * item.price ),
    0
  );

  // handle close on escape button
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    userProgressCtx.hideCart();
    cartCtx.clearCart();
    clearData();
  }

  // handle submit
  async function handleSubmit(e) {
    e.preventDefault();

    // new Formdata to get form values
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    // through useHttp custom hook
    sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData
      }
    }));

    // for single component calling an API
    // await fetch('http://localhost:3000/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartCtx.items,
    //       customer: customerData
    //     }
    //   })
    // });
  }

  // change actions accordingly isLoading
  let actions = (
    <>
      <Button 
        type="button" 
        readOnly 
        onClick={ handleClose }
      > Close </Button>
      <Button>Submit Order</Button>
    </>
  );

  if(isSending) {
    actions = <span>Sending order data...</span>
  }

  if(data && !error) {
    return (
      <Modal 
        open={userProgressCtx.progress === 'checkout'} 
        onClose={handleFinish}
      >
        <h2> Success! </h2>
        <p> 
          Your order was submitted successfully. 
        </p>
        <p> 
          We will get back to you with more details via email within the next few minutes. 
        </p>
        <p className="modal-actions">
          <Button onClick={ handleFinish }> 
            Okay
          </Button>
        </p>
      </Modal>
    )
  }


  return (
    <Modal 
      open={userProgressCtx.progress === 'checkout'}
      onClose={ handleClose }
      >
      <form onSubmit={ handleSubmit }>
        <h2>Checkout</h2>
        <p>Total Amount: { currencyFormatter.format(cartTotal) }</p>
        <Input 
          label= "Full Name"
          type= "text"
          id= 'name'
        />

        <Input 
          label= "Email"
          type= "email"
          id= 'email'
        />

        <Input 
          label= "Street"
          type= "text"
          id= 'street'
        />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"/>
          <Input label="City" type="text" id="city"/>
        </div>
        
        { 
          error && 
          <Error 
            title='Failed to submit order' 
            message={ error }
          />
        }
        
        <p className="modal-actions">
          { actions }          
        </p>

      </form>
    </Modal>
  );
}