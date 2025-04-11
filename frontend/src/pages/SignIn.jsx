import React from 'react'
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className='w-full flex items-center justify-center p-7 md:px-0'>
        <div className='bg-slate-300 p-5 rounded-lg md:w-1/3 w-full'>
            <h1 className='text-3xl font-medium text-center'>Login to <span className='text-blue-500'>Loop Talk</span></h1>
            <form>
                <div>
                    <label className='text-sm font-medium block mb-1'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2'>
                    <label className='text-sm font-medium block mb-1'>Password</label>
                    <input type="email" placeholder='Enter Password' className='w-full r bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <Link className='text-sm hover:text-blue-500' to={'/signup'}>{"Don't"} have an account?</Link>
                <input type="submit" className='w-full bg-blue-500 text-white rounded-sm cursor-pointer hover:bg-slate-600' value={"Login"} />
            </form>
        </div>
    </div>
  )
}

export default SignIn;