import Cart from "./components/Cart";
import products from "./products.json";
import Product from "../src/components/Product";

function App() {
  return (
    <div className="container">
      <div className="container">
        <Cart/>
      </div>
      <div className="row">
        {
          products.map((product, index)=>(
           <div className="col-3" key={index}>
               <Product {...product}/>
           </div>

          ))
        }

      </div>
    </div>
  );
}

export default App;
