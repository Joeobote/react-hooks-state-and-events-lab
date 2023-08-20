import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react';
import React, {useState} from 'react';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  return (
    <div className={"App dark"}>
      <div className={"App light"}>

</div>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    
  );
}






export default App;
