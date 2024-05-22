import { useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  required?: boolean;
  className?: string;
  items: string[];
  placeholder?: string; 
};

const LDSelect = ({
  name,
  required = false,
  className = "",
  items,
  placeholder = "Select an option",
}: TSelectProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="w-full">
      <select
        {...register(name, { required })}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${className}`}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {items.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message ? String(errors[name]?.message) : "This field is required"}
        </p>
      )}
    </div>
  );
};

export default LDSelect;
