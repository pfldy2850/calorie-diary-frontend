import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="w-full px-6 py-5">
      <div className="container mx-auto">
        <Link to="/" className="text-3xl text-gray-900 font-bold mr-8">
          FOOD.log
        </Link>

        <Link to="/" className="text-lg text-gray-500 hover:text-gray-700 mx-4">
          SignIn
        </Link>
        <Link to="/" className="text-lg text-gray-500 hover:text-gray-700 mx-4">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Header;
