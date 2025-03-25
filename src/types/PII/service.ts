import React from "react";

/**
    * Interface for service item properties
    * @interface ServiceProps
    * @property {React.ReactNode} icon - The icon component to display for the service
    * @property {string} title - The title of the service
    * @property {string[]} list - Array of service features or descriptions
 */

export interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    list: string[];
}
