import React, { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth }  from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
      
    
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData]=useState({

        email:"demo@gmail.com",
        password:"123456"

    });
    const {email,setEmail}=formData;
    const {password,setPassword} = formData;
    const navigate = useNavigate();
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
        }))
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
          const auth = getAuth();
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (userCredential.user) {
            navigate("/");
          }
        } catch (error) {
          toast.error("Bad user credentials");
        }
      }
  return (
    <section>
        <h1 className="text-3xl text-center mt-8 font-bold">Sign in </h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
            
            <div className=" w-full md:w-[67%] lg:w-[40%] ">
            <form onSubmit={onSubmit}>
                <input className="mb-6 w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} onChange={onChange} placeholder="Email" 
                />
                <div className="relative mb-6">
                <input className="w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="Password" 
                />
                {showPassword ? (
                    <AiFillEyeInvisible className="absolute top-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> ! prevState)}/>
                ) : (<AiFillEye className="absolute top-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> ! prevState)}/>)}
                </div>

                  

                <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">Don't have an account?
                    <Link to="/sign-up" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out ">Register</Link>
                </p>
                <p>
                    <Link to="/forgot-password" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out">
                    Forgot password
                    </Link>
                </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded" type="submit" >Sign in</button>

            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300" >
                <p className="text-center font-semibold mx-4">or</p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded "  type="submit"
          onClick={()=>{
            setEmail("demo@gmail.com");
            setPassword("123456");
          }}
          >Guest login</button>


             </form> 

            </div>
         

           </div>
    </section>
  )
}
