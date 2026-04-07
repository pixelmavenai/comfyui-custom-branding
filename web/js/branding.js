import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "custom.branding",
    async setup() {
        // Change tab title
        document.title = "PixelMaven";

        // Change favicon
        const link = document.querySelector("link[rel~='icon']")
            || document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        // Host your favicon inside the extension folder
        link.href = new URL("../favicon.png", import.meta.url).href;
        document.head.appendChild(link);
    }
});