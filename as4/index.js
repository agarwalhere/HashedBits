//Question 1

function swapTheme() {
    //write your code
        let appDiv = document.getElementById("app");
        let button = document.getElementById("swap");
    
        if (appDiv.classList.contains("day")) {
            appDiv.classList.replace("day", "night");
            button.classList.replace("button_day", "button_night");
        } else {
            appDiv.classList.replace("night", "day");
            button.classList.replace("button_night", "button_day");
        }
}

//Question 2

//Write your code here
function createDiv(width, height, text) {
    let newDiv = document.createElement("div")
    newDiv.style.width = width + "px"
    newDiv.style.height = height + "px"
    newDiv.textContent = text
  
    document.getElementById("container").appendChild(newDiv)
}
  
// Do not change this code
Window.createDiv = createDiv(200,100,"hello world")

//Question 3

// your js code goes here
function toggleVisibility() {
    let para = document.getElementById("useless-paragraph");

    if (para.style.display === "none") {
        para.style.display = "block"; // Show the paragraph
    } else {
        para.style.display = "none"; // Hide the paragraph
    }
}

//Question 4

// javascript code goes here
document.getElementById("colorchange").addEventListener("click", function () {
    let color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    let size = document.getElementById("fontsize").value;
    document.getElementById("text-container").style.fontSize = size + "px";
});

document.getElementById("italic").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    let font = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    let cssProps = `
        color: ${text.style.color}; 
        font-size: ${text.style.fontSize}; 
        font-family: ${text.style.fontFamily}; 
        text-decoration: ${text.style.textDecoration}; 
        font-style: ${text.style.fontStyle}; 
        font-weight: ${text.style.fontWeight};
    `;
    document.getElementById("css-props").textContent = cssProps.trim().replace(/\s+/g, ' ');
});


