import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            exact
            to={"/"}
            activeClassName="text-black"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-red-800 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/Post"
            activeClassName="text-black bg-green-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black "
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/Project"
            activeClassName="text-black bg-green-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black "
          >
            Projects
          </NavLink>
          <NavLink
            to="/About"
            activeClassName="text-black bg-green-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black "
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flax py-3 px-3 my-6">
          <SocialIcon
            url="https://www.instagram.com/schnoodlevisuals/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/nick-magee-489271162/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
