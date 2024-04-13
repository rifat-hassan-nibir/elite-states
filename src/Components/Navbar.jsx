import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 p-0 ">
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
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="p-2 bg-primary rounded-full text-white flex items-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <AiOutlineUser className="bg-primary text-white text-[18px]" title="user" />
                )}
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>User Profile</a>
                </li>
                <li>
                  <a onClick={logOutUser}>Logout</a>
                </li>
              </ul>
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
