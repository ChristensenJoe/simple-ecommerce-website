import React, {useState, useEffect} from "react";
import 'fomantic-ui-css/semantic.css';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import Products from "./components/Products"

function App() {
const [products, setProducts] = useState(null);

useEffect(() => {
  fetch("http://localhost:3001/products")
  .then(res => res.json())
  .then(data => {setProducts(data)});
}, [])

  return (
    <div className="App">
        <HeaderComponent />
        {products && <Products 
                      products={products} 
                     />}
    </div>
  );
}

export default App;
