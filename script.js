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
