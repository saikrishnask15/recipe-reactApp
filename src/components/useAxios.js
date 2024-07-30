import axios from "axios";
import { useEffect, useState } from "react";
const YOUR_APP_ID = "945fddb8";
const YOUR_APP_KEY = "e48f710289a4eeb41d70cce83e5c8c6b";
const UseAxios = (param) => {
    const [response, setResponse] = useState([]);

    axios.defaults.baseURL = `https://api.edamam.com/search?q=biryani&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    const fetchData = async (url) =>{
        try {
            const res = await axios(url);
            setResponse(res.data.hits);
        } catch (error) {
            
        }
            
    }
    useEffect(()=>{
            fetchData(param);
    },[param])
    return {response,fetchData:url=>fetchData(url)};
}
 
export default UseAxios;