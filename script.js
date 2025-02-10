const toggleAboutMe = document.getElementById("toggle-aboutMe");
const toggleTheme = document.getElementById("toggle-theme");
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// Function to open sidebar
function openSidebar() {
    sidebar.style.left = "0";
    sidebar.style.opacity = "1";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to close sidebar
function closeSidebar() {
    sidebar.style.left = "-260px";
    sidebar.style.opacity = "0";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.style.overflow = "auto"; // Enable scrolling again
}

toggleAboutMe.addEventListener("click", function() {
    let aboutMe = document.getElementById("aboutMe");
    if (aboutMe.style.display === "none") {
        aboutMe.style.display = "block";
    } else {
        aboutMe.style.display = "none";
    }    
});    

toggleTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

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

// Event listeners
menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
