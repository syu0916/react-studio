import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const[cart, cartList] = useState([]);
  const[total, keepTrack] = useState(0);

  function handleList(prop) {
    cartList(cart => [prop, " ", ...cart]);
    console.log(cart);
  }

  function totalPrice(prop){
    keepTrack(total + prop);
  }
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className = "items">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        BakeryItem(item, handleList, totalPrice)
      ))}

      </div>
      

      <div>
        <h2>Cart</h2>
        <p> Cart Contents: {cart}</p>
        <p> here is the total: {total}</p>
      </div>
    </div>
  );
}

function BakeryItem(item, handleList, totalPrice){
  return (
    <div className = "bakery-item">
      <h2>{item.name} </h2>
      <img src = {item.image}/> 
      <button type="button" class="btn btn-success" 
        onClick = {() => {handleList(item.name); totalPrice(item.price)}}>Click to add: {item.price}
      </button>
      
      
    </div>
  );
      
}

export default App;
