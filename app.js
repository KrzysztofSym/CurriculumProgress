// Add JavaScript code here
let percent = document.getElementById("percent");
let counter = 0;

setInterval(() => {
if (counter == 25) {
    clearInterval; 
} else {
    counter += 1;
    percent.innerHTML = `${counter}%`;
}
}, 20);