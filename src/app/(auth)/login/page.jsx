
'use client'


import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { SiGoogle } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";





const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const handleLogin = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            toast.success("Login successful ");
            router.push("/");
        }
    };



    //  GOOgle signin
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    }

    return (
        <div className='container mx-auto min-h[80vh] flex 
        justify-center items-center bg-gray-100'>

            <div className='p-4  rounded-2xl bg-gray-300 my-20 '>




               
                <h1 className='p-4 text-3xl font-bold text-center '>Login Your account</h1>
                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend py-2 font-bold"> Email</legend>
                        <input type="email"
                            className="input "
                            {...register("email", { required: "email field is required" })}
                            placeholder="Type here email" />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}


                    </fieldset>
                    <fieldset className="fieldset  ">
                        <legend className="fieldset-legend py-2 font-bold">password</legend>
                        <input type="password"
                            className="input rounded-md"
                            {...register("password", { required: "password field is required" })}
                            placeholder="Type here password" />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className=" py-2 rounded-2xl 
                    btn-block bg-primary text-white">Login</button>
                </form>
                <p className="text-center text-2xl font-bold">or</p>
                <button className="btn border border-purple-600 btn-block text-cyan-300 text-center mx-auto flex justify-center items-center" onClick={handleGoogleSignin}><SiGoogle size={15} />Loing with Google</button>

                <p className="mt-2">Dont have an account? <Link className="text-blue-400" href={'/register'}>Register</Link> </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default LoginPage;
