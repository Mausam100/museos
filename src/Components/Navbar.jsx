import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-10 text-sm md:text-base">
      <div className="p-4 font-medium text-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center whitespace-nowrap">
          <h1>
            <a href="#">
              Museums for the 21st Century
            </a>
          </h1>
          <p className="flex justify-end md:justify-center">(Uruguay)</p>
          <div className="hidden md:flex md:justify-end">
            <p>(Juan Manuel Blanes)</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
