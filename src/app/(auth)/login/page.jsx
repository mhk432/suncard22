
 'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const {register,handleSubmit,formState: { errors },}=useForm();
            
    const handleLogin = async (data) =>{

        console .log(data)

        const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
       console.log (res,error)

    }

    return (
        <div className='container mx-auto min-h[80vh] flex 
        justify-center items-center bg-gray-100'>
            <div className='p-4  rounded-2xl bg-gray-300 my-20 '>

                <h1 className='p-4 text-3xl font-bold text-center '>Login Your account</h1>
                <form   className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend py-2 font-bold"> Email</legend>
                        <input type="email"
                        
                        className="input " 
                        {...register("email" ,{required: "email field is required"})}
                         placeholder="Type here email" />
        {errors.email && <p className="text-red-600">{errors.email.message}</p> } 

                       
                    </fieldset>
                    <fieldset className="fieldset  ">
                        <legend className="fieldset-legend py-2 font-bold">password</legend>
                        <input type="password"
                         className="input rounded-md"
                         {...register("password" ,{ required: "password field is required" })}
                          placeholder="Type here password" />
                         {errors.password && <p className="text-red-600">{errors.password.message}</p> } 
                       
                    </fieldset>
                    <button className=" py-2 rounded-2xl 
                    btn-block bg-primary text-white">Login</button>
                </form>
                <p className="mt-2">Dont have an account? <Link className="text-blue-400" href={'/register'}>Register</Link> </p>

            </div>
        </div>
    );
};

export default LoginPage;
