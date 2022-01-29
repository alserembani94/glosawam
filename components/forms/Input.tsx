import React from "react";

interface InputProps {

}

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = ({
  className,
  ...otherInputProps
}) => {
    return (
        <input
          className={`
            bg-slate-50
            text-slate-900
            outline-none
            shadow-sm
            px-6
            py-2
            rounded-full
            transition-all
            focus:outline-none
            focus:bg-slate-50
            focus:text-slate-800
            focus:shadow-violet-500
            ${className}
          `}
          {...otherInputProps}
        />
    );
};

export default Input;