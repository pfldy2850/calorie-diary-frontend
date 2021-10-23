import { NavLink } from "react-router-dom";

export const HeaderNav: React.FC<{
  to: string;
  name: string;
}> = (props) => {
  return (
    <NavLink
      to={props.to}
      className="text-sm text-gray-500 hover:text-gray-700 mx-4"
      activeClassName="text-gray-900 border-b-2 border-gray-500"
    >
      {props.name}
    </NavLink>
  );
};
