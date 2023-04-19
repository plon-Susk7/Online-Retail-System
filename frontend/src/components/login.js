import React, { useState } from 'react';
import axios from 'axios';

const Login = ({user,setUser}) => {
  const [formData, setFormData] = useState({
    username: '',
    passw: '',
  });





  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    //console.log(formData);

    axios
      .post('http://localhost:8000/login', formData)
      .then((res) => {
        console.log(res.data);
        if(res.data[0]=== undefined){
            console.log("can't login");
        }else{
            setUser(res.data[0])
            localStorage.setItem('user',JSON.stringify(res.data[0]))
            console.log(`You are logged in as ${res.data[0].fname}!`)
        }
      })
      .catch((err) => console.log(err));
    // code to submit the form data to the server using axios
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmission}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Enter username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="passw"
            className="block text-gray-700 font-bold mb-2"
          >
            Enter password
          </label>
          <input
            type="text"
            name="passw"
            value={formData.passw}
            onChange={handleInputChange}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
