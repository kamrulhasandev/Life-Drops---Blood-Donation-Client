import { useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const LDInput = ({
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: TInputProps) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="w-full">
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${className}`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message ? String(errors[name]?.message) : "This field is required"}
        </p>
      )}
    </div>
  );
};

export default LDInput;
