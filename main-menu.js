function select(number) {
    switch (num) {
        case 1:
            window.location.href = "start.html";
            break;
        case 2:
            window.location.href = "instructions.html";
            break;
        case 3:
            window.location.href = "top-songs.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    document.addEventListener("keydown", (event) => {
        const charList = "b123";
        const key = event.key.toLowerCase();

        const num = charList.indexOf(key);
        switch (num) {
            case 0:
                return;
            default:
                select(num);
                console.log("selecting with num " + num);
        }
    });
});