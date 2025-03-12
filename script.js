// const divider = document.getElementById("divider");
// const leftContainer = document.getElementById("left-container");
// const rightContainer = document.getElementById("right-container");

// let isResizing = false;

// divider.addEventListener("mousedown", (e) => {
//     isResizing = true;
//     document.body.style.cursor = "ew-resize";
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", () => {
//         isResizing = false;
//         document.body.style.cursor = "default";
//         document.removeEventListener("mousemove", handleMouseMove);
//     });
// });

// function handleMouseMove(e) {
//     if (isResizing) {
//         const containerRect = document.querySelector(".container").getBoundingClientRect();
//         const newWidth = e.clientX - containerRect.left;

//         if (newWidth > 100 && newWidth < containerRect.width - 100) {
//             leftContainer.style.width = `${newWidth}px`;
//             rightContainer.style.width = `${containerRect.width - newWidth - 10}px`; // subtract divider width
//             divider.style.left = `${newWidth}px`;
//         }
//     }
// }

// document.getElementById("toggleDescription").addEventListener("click", function() {
//     var paragraph = document.getElementById("description");
//     var button = document.getElementById("toggleDescription");

//     // Toggle visibility of the paragraph
//     if (paragraph.style.display === "none") {
//         paragraph.style.display = "block";
//         button.innerText = "hide";
//     } else {
//         paragraph.style.display = "none";
//         button.innerText = "show";
//     }
// });


const divider = document.getElementById("divider");
const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

let isResizing = false;

// Variable to keep track of the left container's width
let leftContainerWidth = leftContainer.offsetWidth;
console.log("Initial left container width:", leftContainerWidth);

// Store the original content of the container
let originalContent = leftContainer.innerHTML;

// Function to track and update the width of the left container
function trackLeftContainerWidth() {
    leftContainerWidth = leftContainer.offsetWidth;
    
    // If the container's width is below 250px, empty the container
    if (leftContainerWidth < 250) {
        leftContainer.innerHTML = ""; // Empty the container content
    } else {
        // If the width is above 200px, restore the original content
        if (leftContainer.innerHTML === "") {
            leftContainer.innerHTML = originalContent;
        }

        // Adjust padding based on the container's width
        if (leftContainerWidth < 1000) {
            leftContainer.style.paddingLeft = "10%";
            leftContainer.style.paddingRight = "10%";
        } else {
            leftContainer.style.paddingLeft = "20%";
            leftContainer.style.paddingRight = "20%";
        }

        if (leftContainerWidth < 600) {
            leftContainer.style.paddingLeft = "30px";
            leftContainer.style.paddingRight = "30px";
        }
    }
}

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

            // Print the updated width of the left container if it's below 1000px
            trackLeftContainerWidth();
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
