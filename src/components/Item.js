import React from "react";

function Item({ name, category }) {
   const [isInCart, setIsInCart] = useState(false);

  const toggleCartStatus = () => {
    setIsInCart(prevStatus => !prevStatus);
  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="not in cart">Remove From Cart</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}}

export default Item;



