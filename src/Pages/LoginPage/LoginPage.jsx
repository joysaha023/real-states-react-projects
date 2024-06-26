import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";


const LoginPage = () => {
  const {SignIn, googleSignin, githubSignin} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;

    //sign in 
    SignIn(email, password)
    .then(result => {
      toast.success("Login Successfully")
      navigate(location?.state ? location.state: '/')
    })
    .catch(error => {
      toast.warning("incorrect password")
    })

  };

  const handlegoogle = () => {
    googleSignin()
    .then(result => {
      toast.success("Login Successfully")
      navigate(location?.state ? location.state: '/')
    })
    .catch()
  };

  const handleGithub = () => {
    githubSignin()
    .then(result => {
      toast.success("Login Successfully")
      navigate(location?.state ? location.state: '/')
    })
    .catch()
  }

  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>HavenHQ - Login</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-[30%] border">
        <h2 className="text-center text-2xl md:text-3xl font-bold">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered rounded-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input input-bordered rounded-none flex items-center gap-2">
            
          <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              
              className=" "
              {...register("password", {required: true}) }/>
            <span className="relative lg:-right-20  text-gray-600" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</span>
            
          </label>
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0077be] text-white hover:text-black rounded-none ">Login</button>
        </div>
        <h2 className="text-center mt-2 font-medium">Not a Member Yet? <Link to={'/register'} className="text-[#0077be] underline">Register Now</Link></h2>
        <p className="text-center mt-2 font-medium">Or Login with</p>
        <div className="flex justify-between">
            <button onClick={handlegoogle} className="flex items-center gap-1 text-[#0077be] btn btn-sm rounded-none"><FaGoogle />Google</button>
            <button onClick={handleGithub} className="flex items-center gap-1 text-[#0077be] btn btn-sm rounded-none"><FaGithub />Github</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
