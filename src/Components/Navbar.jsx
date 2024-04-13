import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="navbar bg-base-100 p-0 lg:max-w-[1140px] mx-auto py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu className="text-[20px]" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/update-profile">Update Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl">
          Elite States
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/update-profile">Update Profile</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <button onClick={logOutUser} className="btn bg-primary rounded-sm text-white flex items-center gap-4">
                Logout
              </button>
              {user?.photoURL ? (
                <img src={user?.photoURL} className="size-8 rounded-full hover:cursor-pointer" title={user?.displayName} />
              ) : (
                <LuUserCircle className="text-black size-7  hover:cursor-pointer" title={user?.displayName} />
              )}
            </div>
          ) : (
            <Link to="/login" className="btn bg-primary rounded-sm text-white flex items-center gap-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
