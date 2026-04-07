# __init__.py
from server import PromptServer
from aiohttp import web
import os

WEB_DIRECTORY = "./web/js"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}

@PromptServer.instance.routes.get("/")
async def custom_index(request):
    index_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "web", "index.html")
    with open(index_path, "r") as f:
        content = f.read()
    
    # Replace title
    content = content.replace("<title>Pixel Maven</title>", "<title>Pixel Maven</title>")
    
    # Replace favicon
    content = content.replace(
        '<link rel="icon"',
        '<link rel="icon" href="/extensions/comfyui-custom-branding/favicon.png"'
    )

    return web.Response(text=content, content_type="text/html")

# Serve the favicon file
@PromptServer.instance.routes.get("/extensions/comfyui-custom-branding/web/js/favicon.png")
async def custom_favicon(request):
    favicon_path = os.path.join(os.path.dirname(__file__), "web", "js", "favicon.png")
    return web.FileResponse(favicon_path)

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS"]