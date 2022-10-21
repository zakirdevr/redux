import React from "react";
import {useSelector} from "react-redux";
import {getItemsSelector} from "../redux/slices/cartSlice";

const Cart = () => {
  // const items = useSelector(state=>state);
  //const total = items.cart.reduce((prev, current)=>prev+current.price,0);
  const items = useSelector(getItemsSelector);
  const total = items.reduce((prev, current)=>prev+current.price,0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;