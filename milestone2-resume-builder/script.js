var hideButton = document.getElementById("hideBtn");
var skillSection = document.getElementById("skillsSection");
hideButton.addEventListener("click", function () {
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
});
