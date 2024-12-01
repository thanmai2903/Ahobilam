import React from "react";
function Header() {
  return (
    <div className="bg-amber-950 p-3 flex">
      <div>
        <img
          className="sm:ml-3 lg:mr-20 cursor-pointer"
          src="https://ahobilamtemple.com/ahobilam/assets/images/New%20Logo.png"
        />
      </div>
      <div className="hidden lg:block text-white cursor-pointer lg:mt-5">
        <span className="ml-20 hover:text-slate-100">About Ahobilam</span>
        <span className="ml-10 hover:text-slate-100">
          Nava Narasimha Temples
        </span>
        <span className="ml-10 hover:text-slate-300">Panchangam</span>
        <span className="ml-10 hover:text-slate-300">Online Services</span>
        <span className="ml-10 hover:text-slate-300">Utsavam</span>
        <span className="ml-10 hover:text-slate-300">Bhakthi Library</span>
      </div>
    </div>
  );
}
export default Header;
