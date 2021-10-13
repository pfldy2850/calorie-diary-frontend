interface DefaultFormInputProps {
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: any;
  colSpan: number;
  placeholder?: string;
}

export const DefaultFormInput: React.FC<DefaultFormInputProps> = (props) => {
  return (
    <div className={`col-span-${props.colSpan}`}>
      <label
        htmlFor={props.name}
        className="block text-base font-medium text-gray-700 mt-2"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete="given-name"
        className="focus:ring-indigo-500 block w-full border-gray-300 border-b-2 p-1 px-2"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
