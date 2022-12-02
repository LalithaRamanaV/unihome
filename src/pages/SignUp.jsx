import React, { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link,  } from 'react-router-dom';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
import { db } from '../firebase';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
    
   
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        
    });
    const {name,email,password} = formData;
    const navigate = useNavigate();
    function onChange(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          const user = userCredential.user;
          const formDataCopy = { ...formData };
          delete formDataCopy.password;
          formDataCopy.timestamp = serverTimestamp();
    
          await setDoc(doc(db, "users", user.uid), formDataCopy);
          toast.success("Sign up was successful");
          navigate("/");
        } catch (error) {
          toast.error("Bad credentials");
        }
      }
  return (
    <section>
        <h1 className="text-3xl text-center mt-8 font-bold">Signup </h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
            <div className=" w-full md:w-[67%] lg:w-[40%] ">
            <form onSubmit={onSubmit}>
               
                <input className="mb-6 w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} onChange={onChange} placeholder="Email" 
                />
                 <input className="mb-6 w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type="text" id="name" value={name} onChange={onChange} placeholder="Name" 
                />
                <div className="relative mb-6">
                <input className="w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="Password" 
                />
                {showPassword ? (
                    <AiFillEyeInvisible className="absolute top-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> ! prevState)}/>
                ) : (<AiFillEye className="absolute top-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> ! prevState)}/>)}
                </div>

                  

                <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">Have an account?
                    <Link to="/sign-in" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out ">Sign in</Link>
                </p>
                <p>
                    <Link to="/forgot-password" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out">
                    Forgot password
                    </Link>
                </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded" type="submit" >Signup</button>


             </form> 

            </div>
         

           </div>
    </section>
  )
}
