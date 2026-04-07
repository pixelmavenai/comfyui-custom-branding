import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "custom.branding",
    async setup() {
        // Change title immediately
        document.title = "Pixel Maven";

        // Also set it after full load (overrides ComfyUI's own title setting)
        window.addEventListener("load", () => {
            document.title = "Pixel Maven";
        });

        // Watch for any title changes and override them
        const observer = new MutationObserver(() => {
            if (document.title !== "Pixel Maven") {
                document.title = "Pixel Maven";
            }
        });

        observer.observe(
            document.querySelector("title") || document.head,
            { childList: true, subtree: true, characterData: true }
        );

        // Change favicon
        const link = document.querySelector("link[rel~='icon']")
            || document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = new URL("../favicon.png", import.meta.url).href;
        document.head.appendChild(link);
    }
});