const divider = document.getElementById("divider");
const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

let isResizing = false;

divider.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "ew-resize";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
        isResizing = false;
        document.body.style.cursor = "default";
        document.removeEventListener("mousemove", handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (isResizing) {
        const containerRect = document.querySelector(".container").getBoundingClientRect();
        const newWidth = e.clientX - containerRect.left;

        if (newWidth > 100 && newWidth < containerRect.width - 100) {
            leftContainer.style.width = `${newWidth}px`;
            rightContainer.style.width = `${containerRect.width - newWidth - 10}px`; // subtract divider width
            divider.style.left = `${newWidth}px`;
        }
    }
}

document.getElementById("toggleDescription").addEventListener("click", function() {
    var paragraph = document.getElementById("description");
    var button = document.getElementById("toggleDescription");

    // Toggle visibility of the paragraph
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.innerText = "hide";
    } else {
        paragraph.style.display = "none";
        button.innerText = "show";
    }
});
