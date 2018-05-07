/* globals SwaggerUIBundle, SwaggerUIStandalonePreset */

"use strict";

window.onload = function() {

    // Build a system
    const ui = SwaggerUIBundle({
        url: "/swagger/swagger.yaml",
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    });

    window.ui = ui;
};
