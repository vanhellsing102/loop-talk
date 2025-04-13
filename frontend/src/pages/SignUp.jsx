import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom'
import { useAuthContext } from '../ContextProviders/AuthContextProvider';
import useAixosPublic from '../hooks/useAixosPublic';

const SignUp = () => {
  const {authUser, setAuthUser} = useAuthContext();
  const axiosPublic = useAixosPublic();

  const handleSignUp = e =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const userName = form.get("userName");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const gender = form.get("gender");
    const newUser = {
      userName, email, password, confirmPassword, gender
    }
    // console.log(typeof gender);
    if(!userName || !email || !password || !confirmPassword || !gender){
      return toast.error("Fill all fields");
    }
    if(password !== confirmPassword){
      return toast.error("Password don't match");
    }

    axiosPublic.post('/auth/signup', newUser)
    .then(res =>{
      // console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setAuthUser(res.data);
      if(res.data.id){
        toast.success('Sign Up Successfully!');
      }
    })
  }
  
  if(authUser){
    // console.log(authUser);
    return <Navigate to={'/'}></Navigate>;
  }
  return (
    <div className='w-full flex items-center justify-center p-7 md:px-0'>
        <div className='bg-slate-300 p-5 rounded-lg md:w-1/3 w-full'>
            <h1 className='text-3xl font-medium text-center'>Sign Up to <span className='text-blue-500'>Loop Talk</span></h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label className='text-sm font-medium block mb-1'>User Name</label>
                    <input type="text" name='userName' placeholder='Enter User Name' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div>
                    <label className='text-sm font-medium block mb-1'>Email</label>
                    <input type="email" name='email' placeholder='example@gmail.com' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2'>
                    <label className='text-sm font-medium block mb-1'>Password</label>
                    <input type="password" name='password' placeholder='Enter Password' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2'>
                    <label className='text-sm font-medium block mb-1'>Confirm Password</label>
                    <input type="password" name='confirmPassword' placeholder='Enter Confirm Password' className='w-full text-sm py-1 bg-slate-600 text-white outline-none border border-gray-400 rounded-sm px-5' />
                </div>
                <div className='mt-2 flex items-center gap-3'>
                  <div className='space-x-1'>
                    <label className='text-sm'>Male</label>
                    <input name='gender' value={"male"} type="radio" className="checkbox checkbox-sm" />
                  </div>
                  <div className='space-x-1'>
                    <label className='text-sm'>Female</label>
                    <input name='gender' value={"female"} type="radio" className="checkbox checkbox-sm" />
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