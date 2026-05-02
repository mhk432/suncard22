


 'use client'

import { authClient } from "@/lib/auth-client";

import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register,handleSubmit,formState: { errors },}=useForm();
            
    const handleRegister = async (data) =>{
        console .log(data)
        const {name,email,photo,password,}=data
        console.log(name,email,photo,password,)
       
     const {data:res,error} =await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",

});
console.log(res,error)
      if(error){
        alert(error.message)
      }
      if(res){
        alert("signup successful")
      }
    }

    return (
        <div className='container mx-auto min-h[80vh] flex 
        justify-center items-center bg-gray-100'>
            <div className='p-4  rounded-2xl bg-gray-300 my-20 '>

                <h1 className='p-4 text-3xl font-bold text-center '>Register Your account</h1>
                <form   className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend py-2 font-bold">Name</legend>
                        <input type="name"
                        
                        className="input " 
                        {...register("name" ,{required: "name field is required"})}
                         placeholder="Type here name" />
        {errors.name && <p className="text-red-600">{errors.name.message}</p> } 

                       
                    </fieldset>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend py-2 font-bold">Photo URL</legend>
                        <input type="photo"
                        
                        className="input " 
                        {...register("photo" ,{required: "photo Url field is required"})}
                         placeholder="Type here photo url" />
        {errors.photo && <p className="text-red-600">{errors.photo.message}</p> } 

                       
                    </fieldset>
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
                    btn-block bg-primary text-white">Register</button>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;