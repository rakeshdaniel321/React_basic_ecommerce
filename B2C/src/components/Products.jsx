import React from "react";
import { useState, useEffect ,useMemo} from "react";
import axios from "axios";
import Cart from "./Cart";
import { FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa'; 

function Products() {
  // const [cartsList, setCartsList] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const[page ,setPage]=useState("products");
 

  const totalPrice=useMemo(()=>{
    return cartItems.reduce((acc,item)=> acc+(item.price*item.quantity),0);
  },[cartItems]);


  console.log("page render");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get("https://dummyjson.com/carts");
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        console.log("response", response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    // console.log("side effect update ");
  }, []);
 const handleCart=(product)=>{
  //  setCartItems(()=>{return [...cartItems,product]})
    // setCartItems((prevCartItems) => {
    //   const existingItemIndex = prevCartItems.findIndex((item) => item.id === product.id);
    //   if (existingItemIndex !== -1) {
    //     const updatedCartItems = [...prevCartItems];
    //     updatedCartItems[existingItemIndex].quantity += 1;
    //     return updatedCartItems;
    //   }
      
    //   return [...prevCartItems, { ...product, quantity: 1 }];
    // }); 
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.find((item) => item.id === product.id);
      if (existingItemIndex) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
    
 
 }
 console.log("cartItems",cartItems);
  // console.log(products?.[0]);
  // console.log(cartsList);

  // console.log(products?.[0]?.products?.[0]?.thumbnail);
  return (
    
   page==="products"?                                             
    <>
    <button className="view-products-btn"  onClick={() => setPage("cart")}>
      View Cart
    </button>
      {/* {cartsList?.map((cart) => {
        return (
        <div className="Cardcontainer" key={cart.id}>
          {cart.products?.map((product,index) => (
            <div className="productCard" key={`${product.id}-${index}`}>
             <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.total}</p> 
            </div>
          ))}
        </div>
      )})} */}
      <div className="ProductsContainer" >
        
        {products?.map((product) => {
          return (
            <div className="productCard " key={product.id}>
              <button className="addToCartBtn" onClick={() => handleCart(product)}>
              <FaRegHeart style={{ marginRight: '8px',color: 'red' }} /> 
              </button>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p id="product-price">Price: ${product.price}</p>
              <p id="product-brand">Brand: {product.brand}</p>
              <p id="product-category">Category: {product.category}</p>
            </div>
          );
        })}
      </div>
    </>:<Cart cartItems={cartItems} setPage={setPage} totalPrice={totalPrice} setCartItems={setCartItems} />
  );
}

export default Products;
