export const SideBarNavGroup: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold">{props.title}</p>
      {props.children}
    </div>
  );
};
