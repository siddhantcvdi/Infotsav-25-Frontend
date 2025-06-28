// Button.tsx
import React from "react";

interface ButtonProps {
    title: string;
    action?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Accepts a function with an event parameter
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
    return (
        <button
            onClick={action}
            className="relative w-[150px] h-18 text-base p-[1px] bg-gradient-to-r from-[#e0e0e0] from-[0%] to-[#FFFFFF] 
                 hover:from-[#131313] hover:from-[61%] hover:to-[#5856D6] 
                 shadow-[0px_4px_4px_1px_rgba(168,167,248,0.51)] 
                 rounded-[30px] urbanist-unique font-extralight text-center 
                 text-black hover:text-white sm:text-lg sm:p-1 sm:w-48
                  md:w-[220px] md:h-15 md:text-xl md:p-2 font-pixelhugger">
            {title}
        </button>
    );
};

export default Button;
