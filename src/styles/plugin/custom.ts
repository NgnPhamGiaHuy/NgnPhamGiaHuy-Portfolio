/**
 * Tailwind CSS Custom Components Plugin
 *
 * This plugin adds reusable utility classes for common flexbox patterns,
 * overflow handling, and full-sized absolute positioning.
 */

import plugin, { PluginAPI } from "tailwindcss/plugin";

// Define the custom Tailwind CSS components plugin
const custom = plugin(({ addComponents }: PluginAPI) => {
    addComponents({
        // Center content both vertically and horizontally using flexbox
        ".flex-center": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        // Space items evenly with alignment centered using flexbox
        ".flex-between": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        // Prevent flex items from growing or shrinking while maintaining automatic sizing.
        ".flex-none-auto": {
            flex: "0 0 auto",
        },
        // Enable vertical scrolling with a scrollbar that overlays content
        ".overflow-overlay": {
            overflowY: "overlay",
        },
        // Create a full-sized absolute positioning container
        ".absolute-full": {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
        },
    });
});

export default custom;