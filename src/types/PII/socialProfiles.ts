import React from "react";

/**
 * Interface for social media profile properties
 * @interface SocialProfilesProps
 * @property {string} title - The name or title of the social media platform
 * @property {string} url - The URL to the social media profile
 * @property {React.ReactNode} icon - The icon component representing the social media platform
 */
export interface SocialProfilesProps {
  title: string;
  url: string;
  icon: React.ReactNode;
}
