import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {fetchData}  from '../api/productApi';
import { addToCart } from "../stores/CartSlice";
import { showSuccess } from "../components/Toast/Toast";



export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchData();

                setProducts(data);


            } catch (err) {
                console.error(err);
                setError("Unable to load products.")

            }
            finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [])

    const totalPrice = useMemo(() => {
        //  console.log("REDUX CART CHANGED:", cartItems);
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);

    const handleCart = (product) => {
        // console.log("handleCart product before:", product);
        dispatch(addToCart(product));
            showSuccess(`${product.title} Added To Cart`)

        //  console.log("dispatch completed after");
    };



    return {
        products,
        cartItems,
        totalPrice,
        handleCart,
        loading,
        error,
    };


}   