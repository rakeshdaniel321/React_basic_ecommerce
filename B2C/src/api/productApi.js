import axios from "axios";

const URL="https://dummyjson.com";

export const fetchData=async ()=>{
    const res=await axios.get(`${URL}/products?limit=1000`);
     return res.data.products;
}