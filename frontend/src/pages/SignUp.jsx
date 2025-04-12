import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-full flex items-center justify-center p-7 md:px-0'>
        <div className='bg-slate-300 p-5 rounded-lg md:w-1/3 w-full'>
            <h1 className='text-3xl font-medium text-center'>Sign Up to <span className='text-blue-500'>Loop Talk</span></h1>
            <form>
                <div>
                    <label className='text-sm font-medium block mb-1'>User Name</label>
                    <input type="text" name='username' placeholder='Enter User Name' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div>
                    <label className='text-sm font-medium block mb-1'>Email</label>
                    <input type="email" name='email' placeholder='example@gmail.com' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2'>
                    <label className='text-sm font-medium block mb-1'>Password</label>
                    <input type="text" name='password' placeholder='Enter Password' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2 flex items-center gap-3'>
                  <div className='space-x-1'>
                    <label className='text-sm'>Male</label>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                  </div>
                  <div className='space-x-1'>
                    <label className='text-sm'>Female</label>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                  </div>
                </div>
                <div className='my-1'>
                    <Link className='text-sm hover:text-blue-500' to={'/signin'}>Already have an account?</Link>
                </div>
                <input type="submit" className='w-full bg-blue-500 text-white rounded-sm cursor-pointer hover:bg-slate-600' value={"Sign Up"} />
            </form>
        </div>
    </div>
  )
}

export default SignUp