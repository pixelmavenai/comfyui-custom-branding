import { app } from "../../scripts/app.js";

// Set title immediately before anything else runs
document.title = "Pixel Maven AI";

// Change favicon immediately too
const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = new URL("./favicon.png", import.meta.url).href;
document.head.appendChild(link);

app.registerExtension({
    name: "custom.branding",
    async setup() {
        // Keep overriding in case ComfyUI resets it
        document.title = "Pixel Maven AI";

        // Watch for any title changes and override them
        const observer = new MutationObserver(() => {
            if (document.title !== "Pixel Maven AI") {
                document.title = "Pixel Maven AI";
            }
        });

        observer.observe(
            document.querySelector("title") || document.head,
            { childList: true, subtree: true, characterData: true }
        );
    }
});