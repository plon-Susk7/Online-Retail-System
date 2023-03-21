import React from 'react';
import axios from 'axios'
import { useState } from 'react';




const Products = () =>{
    let [responseData,setResponseData] = useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:8000/getallproducts")
        .then((result)=>{
            setResponseData(result.data)
            //console.log(result)
        })
        .catch(err=>console.log(err));
    },[])
    
    //console.log(responseData)

    return(
        <div>
            
            <h1>Products</h1>
            {responseData.map((data)=>{
                return <p>{data.prod_name}</p>
            })}
            
        </div>
    )
}

export default Products