import React from "react";
import { Link, useLocation } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex justify-between bg-gray-200 py-8">
          <div className="max-w-[1000px] w-[90%] mx-auto flex justify-between items-center ">
            <div>
              <h1 className="font-black text-md">TUGAS LOCATION</h1>
            </div>
            <div className="flex items-center gap-4">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/provincies">Provincies</CustomLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const CustomLink = ({ to, children }: any) => {
  const location = useLocation();
  let isActive = location.pathname === to || (location.pathname.startsWith(to) && to !== "/");
  const className = isActive ? "text-blue-700" : "";

  return (
    <Link to={to} className={className + " font-semibold"}>
      {children}
    </Link>
  );
};
