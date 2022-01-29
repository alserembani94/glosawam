import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {

}

const Button: React.FC<ButtonHTMLAttributes<ButtonProps>> = ({
  ...otherButtonProps
}) => {
    return (
        <button
          className="
            min-w-[20ch]
            w-fit
            bg-violet-500
            text-white
            shadow-md
            px-6
            py-2
            rounded-full
            hover:bg-violet-800
            focus:outline-none
            focus:shadow-outline
            focus:border-slate-300
            focus:bg-violet-800
            focus:text-slate-100
          "
          {...otherButtonProps}
        />
    );
};

export default Button;