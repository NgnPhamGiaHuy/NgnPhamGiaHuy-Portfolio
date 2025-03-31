import clsx from "clsx";
import React from "react";

interface InputProps {
    id: string;
    type?: string;
    label: string;
    isFilled?: boolean;
    placeholder?: string;
    isTextarea?: boolean;
    width?: "full" | "half";
}

const Input: React.FC<InputProps> = React.memo(({ id, label, type = "text", isFilled = false, placeholder = "", isTextarea = false, width = "full" }) => {
    const widthClass = width === "full" ? "w-full" : "max-sm:w-full w-1/2";

    return (
        <div className={clsx(widthClass, "max-md:mt-6 mt-12 px-3 flex-none-auto")}>
            <label htmlFor={id} className={"max-sm:mb-3 mb-5 text-sm text-title font-semibold font-(family-name:--font-montserrat) leading-none inline-block"}>
                { label }*
            </label>
            <span>
                { isTextarea ? (
                    <textarea id={id} placeholder={placeholder} className={"w-full min-h-38 px-4 py-3 font-medium font-(family-name:--font-montserrat) bg-transparent border border-r-4 border-b-4 border-solid border-title focus:border-primary-1 focus:outline-primary-1 rounded-md shadow-none"} />
                ) : (
                    <input type={type} id={id} placeholder={placeholder} className={"w-full h-12 px-4 py-3 font-medium font-(family-name:--font-montserrat) bg-transparent border border-r-4 border-b-4 border-solid border-title focus:border-primary-1 focus:outline-primary-1 rounded-md shadow-none"} />
                ) }
                { isFilled && (
                    <span className={"mt-2 text-xs text-[#dc3232] font-normal"}>
                        Please fill out this field.
                    </span>
                ) }
            </span>
        </div>
    );
});

Input.displayName = "Input";

export default Input;