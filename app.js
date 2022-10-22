function select(number) {}

function b() {}

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    document.addEventListener("keydown", (event) => {
        const charList = "b123";
        const key = event.key.toLowerCase();

        const num = charList.indexOf(key);
        switch (num) {
            case -1:
                console.log("irrelevant");
                return;
            case 0:
                b();
                console.log("going back");
                break;
            default:
                select(num);
                console.log("selecting with num " + num);
        }
    });
});
