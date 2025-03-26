import { SizeProps } from "@/types";

const TITLE_SIZE_MAP: Record<SizeProps["size"], string> = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
    custom: "",
}

export default TITLE_SIZE_MAP;