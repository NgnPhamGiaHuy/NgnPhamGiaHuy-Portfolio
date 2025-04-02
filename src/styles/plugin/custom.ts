/**
 * Tailwind CSS Custom Components Plugin
 *
 * This plugin adds reusable utility classes for common flexbox patterns,
 * overflow handling, and full-sized absolute positioning.
 */

// @ts-ignore
import plugin, { PluginAPI } from "tailwindcss/plugin";

/**
 * Custom Tailwind CSS plugin that adds utility components for common layout patterns
 * @param {PluginAPI} { addComponents } - Tailwind plugin API for adding custom components
 * @returns {PluginAPI} The configured Tailwind plugin
 */
const custom = plugin(({ addComponents }: PluginAPI) => {
    addComponents({
        /**
         * Centers content both vertically and horizontally using flexbox
         * @example
         * <div class="flex-center">
         *   <span>Centered Content</span>
         * </div>
         */
        ".flex-center": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        /**
         * Spaces items evenly with alignment centered using flexbox
         * @example
         * <div class="flex-between">
         *   <span>Left</span>
         *   <span>Right</span>
         * </div>
         */
        ".flex-between": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        /**
         * Prevents flex items from growing or shrinking while maintaining automatic sizing
         * @example
         * <div class="flex-none-auto">
         *   <span>Fixed Size Content</span>
         * </div>
         */
        ".flex-none-auto": {
            flex: "0 0 auto",
        },
        /**
         * Enables vertical scrolling with a scrollbar that overlays content
         * @example
         * <div class="overflow-overlay">
         *   <div>Scrollable Content</div>
         * </div>
         */
        ".overflow-overlay": {
            overflowY: "overlay",
        },
        /**
         * Creates a full-sized absolute positioning container
         * @example
         * <div class="relative">
         *   <div class="absolute-full">Full Size Overlay</div>
         * </div>
         */
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
