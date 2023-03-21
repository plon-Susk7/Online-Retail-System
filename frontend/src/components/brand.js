import React from 'react';
import axios from 'axios'
import { useState } from 'react';




const Brand = () =>{
    let [responseData,setResponseData] = useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:8000/getallbrand")
        .then((result)=>{
            setResponseData(result.data)
            //console.log(result)
        })
        .catch(err=>console.log(err));
    },[])
    

    return(
        <div >
            
            <h1>Products</h1>
            {responseData.map((data)=>{
                return <div style={{margin: '10px', backgroundColor : '#F3F3F3',display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                    <img src= "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    <p>name : {data.brand_name}</p>
                    </div>
            })}
            
        </div>
    )
}

export default Brand