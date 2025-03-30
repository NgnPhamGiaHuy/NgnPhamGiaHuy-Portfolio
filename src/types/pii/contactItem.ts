import React from "react";

export interface ContactItemProps {
    icon: React.JSX.Element;
    href: string;
    title: string;
    label: string;
    value: string;
}