const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
const typingText = document.getElementById("typing-text");
const text = "Hi! I am a beginner programmer learning HTML and CSS.";
let i = 0;
function typeWriter() {
    typingText.innerHTML += text.charAt(i);
    i++;

    if (i < text.length) {
        setTimeout(typeWriter, 100);
    }
}
typeWriter();