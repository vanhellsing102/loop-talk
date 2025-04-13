import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAixosPublic from '../hooks/useAixosPublic';
import toast from "react-hot-toast";
import { useAuthContext } from '../ContextProviders/AuthContextProvider';


const SignIn = () => {
    const axiosPublic = useAixosPublic();
    const {setAuthUser} = useAuthContext();
    const navigate = useNavigate();

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        const loggedInUser = {
            email, password
        }
        axiosPublic.post('/auth/signin', loggedInUser)
        .then(res =>{
            // console.log(res.data);
            if(res.data){
                localStorage.setItem("user", JSON.stringify(res.data));
                setAuthUser(res.data);
                toast.success('Sign In Successfully!');
                navigate("/");
            }
        })
    }
  return (
    <div className='w-full flex items-center justify-center p-7 md:px-0'>
        <div className='bg-slate-300 p-5 rounded-lg md:w-1/3 w-full'>
            <h1 className='text-3xl font-medium text-center'>Login to <span className='text-blue-500'>Loop Talk</span></h1>
            <form onSubmit={handleSignIn}>
                <div>
                    <label className='text-sm font-medium block mb-1'>Email</label>
                    <input type="email" name='email' placeholder='example@gmail.com' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2'>
                    <label className='text-sm font-medium block mb-1'>Password</label>
                    <input type="password" name='password' placeholder='Enter Password' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='my-1'>
                    <Link className='text-sm hover:text-blue-500' to={'/signup'}>{"Don't"} have an account?</Link>
                </div>
                <input type="submit" className='w-full bg-blue-500 text-white rounded-sm cursor-pointer hover:bg-slate-600' value={"Login"} />
            </form>
        </div>
    </div>
  )
}

export default SignIn;