import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, reload, setReload } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, image, email, password } = data;

    // Password validation
    if (password.length < 6) {
      return toast.error("Error ! Password should be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Error ! Password should contain at least one uppercase character");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Error ! Password should contain at least one lowercase character");
    }

    // Create user and update profile
    createUser(email, password)
      .then((result) => {
        // Update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        }).then(() => {
          setReload(!reload);
        });
        console.log(result.user);
        toast.success("User created successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Error ! Check your connection or provide an Email that is not in use");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Elite States | Register</title>
      </Helmet>
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        className="w-full max-w-md mx-auto p-8 lg:my-[50px] space-y-3 rounded-xl bg-gray-50 text-gray-800"
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
            />
            {errors.name && <span className="text-red-400">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              placeholder="Photo URL"
              {...register("image")}
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
            />
            {errors.email && <span className="text-red-400">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
                />
                <span className="absolute right-4 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              {errors.password && <span className="text-red-400">This field is required</span>}
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-primary">Register</button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <span> </span>
          <Link to="/login" className="underline text-gray-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
