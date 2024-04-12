import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 lg:my-[50px] space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-primary"
          />
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
  );
};

export default Register;
