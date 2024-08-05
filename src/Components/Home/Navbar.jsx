import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-2">
      <div className="row">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo font-semibold text-xl">Church Name</div>
            <ul className="flex items-center gap-5 uppercase">
              <li><Link>Home</Link></li>
              <li><Link>About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
