import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
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
        <div className="dropdown dropdown-end">
          <div tabIndex={0}>
            <Link to="/login" className="btn bg-primary rounded-sm text-white flex items-center gap-4">
              <FaRegUser />
              Login
            </Link>
            {/* <FaRegCircleUser className="text-[20px]" /> */}
          </div>
          {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
