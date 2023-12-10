import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const {  title, price, description, id } = props;
  
  // useSelector to get cart 
  // const cart= useSelector((state) => state.cart);

  // useDispatch to dispatched the reducers functions
  const dispatch= useDispatch(); 

  // addtocart handler
  const addToCartHandler = () => {
    // // totalNewQuantity 
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems= cart.items.slice(); // create copy via slice to avoid mutating
    // const existingItem = updatedItems.find((item) => item.id === id);

    // // check item exist or not
    // if(existingItem) {
    //   const updateItem = { ...existingItem };
    //   // update quantity and total price
    //   updateItem.quantity++;
    //   updateItem.totalPrice= updateItem.totalPrice + price;
    //   // check index of existing item
    //   const existingItemIndex= updatedItems.findIndex((item) => item.id === id);
    //   // Then pushed update item inside it
    //   updatedItems[existingItemIndex] = updateItem;
    // } else {
    //   // If not exist then push it into updatedItems array
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //     description: description
    //   });
    // }

    // // new cart for replace the existing cart.
    // const newCart= {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems
    // }

    // dispatch(cartActions.replaceCart(newCart));


    // with addItem
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={ addToCartHandler }>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
