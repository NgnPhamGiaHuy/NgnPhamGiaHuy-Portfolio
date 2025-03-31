import { SizeProps } from "@/types";

const BUTTON_SIZE_MAP : Record<SizeProps["size"], string> = {
    sm: "py-2 px-4 text-xs",
    md: "max-sm:py-2 py-3 max-sm:px-4 px-5 max-sm:text-xs text-sm",
    lg: "max-sm:py-3 py-4 max-sm:px-5 px-6 max-sm:text-sm text-base",
    xl: "py-5 px-7 text-lg",
    custom: "",
};

export default BUTTON_SIZE_MAP;