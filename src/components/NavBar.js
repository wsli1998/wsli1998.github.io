import { React } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <header className="bg-green-300">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-6 mr-6 text-black-100 hover:text-blue-500 text-4xl font-bold cursive tracking-widest "
          >
            Sam
          </NavLink>  

          <NavLink
            to="/post"
            activeClassName="text-white bg-green-400"
            className="inflex-flex items-center py-6 px-6 mr-6  rounded text-black-100 hover:text-blue-500 text-3xl"
          >
            Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-green-400"
            className="inflex-flex items-center py-6 px-6 mr-6  rounded text-black-100 hover:text-blue-500 text-3xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-green-400"
            className="inflex-flex items-center py-6 px-6 mr-6  rounded text-black-100 hover:text-blue-500 text-3xl"
          >
            About Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
