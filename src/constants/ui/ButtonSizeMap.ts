import { SizeProps } from "@/types";

const BUTTON_SIZE_MAP : Record<SizeProps["size"], string> = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-4 px-6 text-base",
    xl: "py-5 px-7 text-lg",
    custom: "",
};

export default BUTTON_SIZE_MAP;