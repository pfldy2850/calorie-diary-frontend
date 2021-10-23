import React from "react";

export const DefaultBox: React.FC<{
  title: string;
}> = (props) => {
  return (
    <div className="w-full bg-white rounded p-6 my-6">
      <div className="w-full text-xl font-semibold mb-4">{props.title}</div>
      <div className="w-full text-sm">{props.children}</div>
    </div>
  );
};
