import React, { useState } from 'react';

import { Link} from 'react-router-dom';

export default function ForgotPassword() {
    
     const[email,setEmail] = useState("");
     const [password,setPassword]=useState("");
 
    function onChange(e){
        setEmail(e.target.value);
    }
  
  return (
    <section>
        <h1 className="text-3xl text-center mt-8 font-bold">Forgot password </h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
            {/* <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                <img src="/home.jpg" alt="home" className="w-full rounded-2xl"/>
            </div> */}
            <div className=" w-full md:w-[67%] lg:w-[40%] ">
            <form >
                <input className="mb-6 w-full px-4 py-2  text-xl text-gray-800 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} onChange={onChange} placeholder="Email" 
                />

                <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">Don't have an account?
                    <Link to="/sign-up" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out ">Register</Link>
                </p>
                <p>
                    <Link to="/sign-in" className="text-blue-600 hover:text-blue-600 transition duration-200 ease-in-out">
                    Signin instead
                    </Link>
                </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded" type="submit" >Send reset password</button>

            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300" >
                <p className="text-center font-semibold mx-4">or</p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded "  type="submit"
         onClick={()=>{
           setEmail("demo@gmail.com");
           setPassword("123456");
         }}>Guest login</button>


             </form> 

            </div>
         

           </div>
    </section>
  )
}
