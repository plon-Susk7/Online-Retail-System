import React from 'react';
import axios from 'axios'
import { useState } from 'react';




const Cart = () =>{
    

    let [responseData, setResponseData] = useState([])
    React.useEffect(() => {
      axios.get("http://localhost:8000/cart") 
        .then((result) => {
          setResponseData(result.data)
        })
        .catch(err => console.log(err));
    }, [])

    const emptyCart = () =>{
        axios.delete("http://localhost:8000/cart/delete")
        .then(res=>{
            setResponseData([])
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-3 gap-6">
                {responseData.map((data) => {
                
                return (
                    <div key={data.id} className="bg-gray-100 rounded-md p-4">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Product" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                    <h2 className="text-lg font-medium">{data.prod_name}</h2>
                    <p className="text-gray-700 mb-4">${data.price}</p>
                    </div>
                )
                })}
        </div>
        <button className="bg-red-500 text-white m-4 py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out" onClick={()=>emptyCart()}>Empty Cart</button>
        <button className="bg-green-500 text-white m-4 py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 ease-in-out">Checkout</button>
    </div>
    )
}

export default Cart