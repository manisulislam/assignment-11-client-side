import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const user ={name, email, password}
    
        console.log(user)
        form.reset()
      }
      
        return (
            <div className="hero">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                  </div>
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
                    <label className="label">
                      <p className="label-text-alt">Already have an account? Please   <Link className='text-orange-500' to='/login'>LogIn</Link></p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">REGISTER</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
};

export default Register;