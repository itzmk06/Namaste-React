import { useState,useEffect } from "react"
const useResMenu=(id)=>{
    const[json,setJson]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[id]);
    const fetchMenu=async()=>{
        const apiData = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`
          );
          const json=await apiData.json();
          setJson(json);
    };
    return json;
};
export default useResMenu;
