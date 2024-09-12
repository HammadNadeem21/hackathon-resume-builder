var submit = document.getElementById("submit");
var downloadButton = document.getElementById("downloadPdf");
var shareButton = document.getElementById("shareLink");
var inputName = document.getElementById("name");
var outputName = document.getElementById("opName");
var inputEmail = document.getElementById("email");
var outputEmail = document.getElementById("opEmail");
var inputPhone = document.getElementById("phone");
var outputPhone = document.getElementById("opPhone");
var inputEducation = document.getElementById("education");
var outputEducation = document.getElementById("opEducation");
var inputExperience = document.getElementById("experience");
var outputExperience = document.getElementById("opExperience");
var inputSkill = document.getElementById("skill");
var outputSkill = document.getElementById("opSkill");
var output = document.querySelector(".output");
submit.addEventListener('click', function (event) {
    event.preventDefault();
    outputName.innerHTML = inputName.value;
    outputEmail.innerHTML = inputEmail.value;
    outputPhone.innerHTML = inputPhone.value;
    outputEducation.innerHTML = inputEducation.value;
    outputExperience.innerHTML = inputExperience.value;
    outputSkill.innerHTML = inputSkill.value;
    output.style.display = "block";
    output.scrollIntoView({ behavior: "smooth", block: "start" });
});
// Handle share button click
shareButton.addEventListener('click', function () {
    var username = prompt("Please enter your username"); // Prompt for username
    if (username) {
        var url = "https://".concat(username, ".vercel.app/resume"); // Construct the URL
        navigator.clipboard.writeText(url).then(function () {
            alert('Resume link copied to clipboard!');
        }).catch(function (err) {
            console.error('Failed to copy URL: ', err);
        });
    }
});
