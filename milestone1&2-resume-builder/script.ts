var hideButton = document.getElementById("hideBtn") as HTMLButtonElement;

var skillSection = document.getElementById("skillsSection") as HTMLElement;

hideButton.addEventListener("click", () => {
  if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
  } else {
    skillSection.style.display = "none";
  }
});
