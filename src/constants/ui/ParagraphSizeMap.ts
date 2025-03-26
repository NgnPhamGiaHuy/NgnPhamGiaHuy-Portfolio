import { SizeProps } from "@/types";

const PARAGRAPH_SIZE_MAP: Record<SizeProps["size"], string> = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    custom: "",
}

export default PARAGRAPH_SIZE_MAP;