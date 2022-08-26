import React from "react";

export const Navbar = ({ setView }) => {
  const viewHandler = (status) => {
    setView(status);
  };

  return (
    <div>
      <nav className="bg-slate-100drop-shadow-lg text-black p-5">
        <div className="flex-row flex justify-between items-center pl-10">
          <div className="sm:pl-0">
            <h1
              className=" hover:scale-105 cursor-pointer font-bold uppercase "
              onClick={() => {
                viewHandler(1);
              }}
            >
              HOME
            </h1>
          </div>
          <div className="hidden w-full md:block md:w-auto pl-10">
            <ul className="flex flex-row gap-10 ">
              <li
                className=" hover:scale-105 cursor-pointer  font-bold uppercase"
                onClick={() => {
                  viewHandler(2);
                }}
              >
                Bids and Awards
              </li>
              <li
                className=" hover:scale-105 cursor-pointer font-bold uppercase"
                onClick={() => {
                  viewHandler(3);
                }}
              >
                Full Disclosure
              </li>
              <li
                className=" hover:scale-105 cursor-pointer font-bold uppercase"
                onClick={() => {
                  viewHandler(4);
                }}
              >
                Officials
              </li>
              <li
                className="hover:scale-105 cursor-pointer font-bold uppercase"
                onClick={() => {
                  viewHandler(5);
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
