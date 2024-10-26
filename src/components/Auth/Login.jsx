import React, { useState } from "react";

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        setEmail('')
        setPassword('');    
    }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[80%] w-[80%] border-teal-700  rounded-2xl shadow-2xl border-4 overflow-hidden flex justify-evenly">
        {/* left part */}
        <div className="w-[45%] h-[100%] flex justify-center items-center flex-col gap-5">
          <h1 className="font-bold text-2xl">Hi User!</h1>
          <h2 className="font-semibold text-xl">
            Some task may waiting for you!
          </h2>
        </div>
        {/* right part */}
        <div className="w-[45%] h-[100%] flex justify-center items-center ">
          <form className="flex flex-col w-[100%] gap-5" onSubmit={(e)=>handleFormSubmit(e)}>
            <input
              type="email"
              className="rounded-full p-2 placeholder:px-2 placeholder:text-bold placeholder:text-black text-black outline-none border-teal-500 border-4"
              placeholder="enter email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              className="rounded-full p-2 placeholder:px-2 placeholder:text-bold placeholder:text-black text-black outline-none border-teal-500 border-4"
              placeholder="enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button className="w-[50%] bg-teal-500 m-auto mt-3 rounded-full p-2 font-bold">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
