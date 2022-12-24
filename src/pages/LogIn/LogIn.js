import React,  {useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/UserContext';


const LogIn = () => {
  const {googleLogIn}= useContext(AuthContext)
 
  const handleLogIn = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user ={email, password}

    console.log(user)
    form.reset()
  }
  const provider = new GoogleAuthProvider()
  const handleGoogleLogIn =()=>{
    googleLogIn(provider)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
    .catch(
      error => console.error('error', error)
    )
   
    
  }
  
    return (
        <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className="btn btn-outline btn-secondary"><FcGoogle></FcGoogle>  GOOGLE</button>
                <label className="label">

                  <p className="label-text-alt">Create an account..   <Link className='text-orange-500' to='/register'>Register</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LogIn;