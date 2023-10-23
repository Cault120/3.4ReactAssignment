import { useState } from "react";
import Button from "./button";
import Input from "./input";


function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(20.99);
  
  const name = "Banana";
  
  // const price = 2.99;

  const handlePlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      return count;
    });
  };

  const handlerChange = (value,price) => {
    if (value < 0) {
      alert("Enter a positive value");
      setPrice("You Are An Idiot");
    }
    else{
      setPrice(value);
    }
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={price} label='Input price' onChange={handlerChange}/>
    </>
  );
}
export default Counter;