import { NavLink } from "react-router-dom";

export const SideBarNav: React.FC<{
  to: string;
  name: string;
}> = (props) => {
  return (
    <NavLink
      to={props.to}
      className="block w-full my-2 p-1 pl-4 text-sm hover:bg-gray-400 rounded"
      activeClassName="bg-indigo-900 text-white"
      exact
    >
      {props.name}
    </NavLink>
  );
};
