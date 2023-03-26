import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    username: '',
    passw: '',
    phone_numb: '',
    address: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmission = (e) => {
    e.preventDefault()
    console.log(formData)

    
    axios.post("http://localhost:8000/signup",formData)
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>console.log(err))
    // code to submit the form data to the server using axios
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <label>Enter First Name</label>
        <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} />
        <label>Enter Middle Name</label>
        <input type="text" name="mname" value={formData.mname} onChange={handleInputChange} />
        <label>Enter Last Name</label>
        <input type="text" name="lname" value={formData.lname} onChange={handleInputChange} />
        <label>Enter User Name</label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        <label>Enter password</label>
        <input type="text" name="passw" value={formData.passw} onChange={handleInputChange} />
        <label>Enter Phone number</label>
        <input type="number" name="phone_numb" value={formData.phone_numb} onChange={handleInputChange} />
        <label>Enter Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup
