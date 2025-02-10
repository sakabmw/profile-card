document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("toggleAboutMe").addEventListener("click", function() {
    let aboutMe = document.getElementById("aboutMe");
    if (aboutMe.style.display === "none") {
        aboutMe.style.display = "block";
    } else {
        aboutMe.style.display = "none";
    }
});

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// Open Sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show"); // Show overlay
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show"); // Hide overlay
});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove("show");
        overlay.classList.remove("show"); // Hide overlay
    }
});
