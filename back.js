function b() {
    window.location.href = "main-menu.html"
}

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() == 'b')
            window.location.href = "main-menu.html";
    });
});