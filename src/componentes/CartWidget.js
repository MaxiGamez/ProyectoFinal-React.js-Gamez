import React from "react";
import { BsFillCartFill } from 'react-icons/bs';

function CartWidget() {
    return (
      <a href="#" class="cart-widget">
        <BsFillCartFill className="icon" />
        <span class="badge">0</span>
      </a>
    );
  }
  
  export default CartWidget;
