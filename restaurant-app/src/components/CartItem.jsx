import { currencyFormatter } from "../util/formatting"

export default function CartItem({ 
  name, 
  quantity, 
  price,
  onIncrease,
  onDecrese
}) {
  
  return(
    <li className="cart-item">
      <p>
        {name} - { quantity } X { currencyFormatter.format(price) }
      </p>
      <p className="cart-item-actions">
        <button onClick={ onDecrese }>-</button>
        <button>{ quantity }</button>
        <button onClick={ onIncrease }>+</button>
      </p>
    </li>
  )
}