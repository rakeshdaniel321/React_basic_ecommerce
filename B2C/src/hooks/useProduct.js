import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../api/productApi';
import { addToCart } from "../stores/CartSlice";
import { showSuccess } from "../components/Toast/Toast";



export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sortBy, setSortBy] = useState("default");



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


    const categories = useMemo(() => {
        return [...new Set(
            products.map((p) => p.category).filter(Boolean)
        )].sort();
    }, [products]);

    const brands = useMemo(() => {
        return [...new Set(
            products.map((p) => p.brand).filter(Boolean)
        )].sort();
    }, [products]);


    const priceCap = useMemo(() => {
        return Math.ceil(
            Math.max(0, ...products.map((p) => Number(p.price) || 0))
        );
    }, [products]);



    const filteredProducts = useMemo(() => {
        let result = products.filter((product) => {
            const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

            const matchPrice =
                Number(product.price) <= (maxPrice ?? priceCap);

            return matchCategory && matchBrand && matchPrice;
        });


        result = [...result];

        switch (sortBy) {
            case "a-z":
                result.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                break;

            case "z-a":
                result.sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
                break;

            case "low-to-high":
                result.sort((a, b) => a.price - b.price);
                break;

            case "high-to-low":
                result.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }

        return result;

    }, [
        products,
        selectedCategory,
        selectedBrands,
        maxPrice,
        priceCap,
        sortBy,
    ]);


    const toggleBrand = (brand) => {
        setSelectedBrands((previous) => previous.includes(brand) ? previous.filter((item) => item !== brand) : [...previous, brand]
        );
    };

    const clearFilters = () => {
        setSelectedCategory("all");
        setSelectedBrands([]);
        setMaxPrice(null);
        setSortBy("default");
    };


    return {
        products: filteredProducts,
        allProducts: products,
        categories,
        brands,
        priceCap,
        cartItems,
        totalPrice,
        handleCart,
        loading,
        error,
        selectedCategory,
        setSelectedCategory,
        selectedBrands,
        toggleBrand,
        maxPrice: maxPrice ?? priceCap,
        setMaxPrice,
        sortBy,
        setSortBy,
        clearFilters,

    };


}   