var submit = document.getElementById("submit") as HTMLButtonElement;
var downloadButton = document.getElementById("downloadPdf") as HTMLButtonElement;
var shareButton = document.getElementById("shareLink") as HTMLButtonElement;



var inputName = document.getElementById("name") as HTMLInputElement;
var outputName = document.getElementById("opName") as HTMLHeadingElement;

var inputEmail = document.getElementById("email") as HTMLInputElement;
var outputEmail = document.getElementById("opEmail") as HTMLHeadingElement;

var inputPhone = document.getElementById("phone") as HTMLInputElement;
var outputPhone = document.getElementById("opPhone") as HTMLHeadingElement;

var inputEducation = document.getElementById("education") as HTMLInputElement;
var outputEducation = document.getElementById("opEducation") as HTMLHeadingElement;

var inputExperience = document.getElementById("experience") as HTMLInputElement;
var outputExperience = document.getElementById("opExperience") as HTMLHeadingElement;

var inputSkill = document.getElementById("skill") as HTMLInputElement;
var outputSkill = document.getElementById("opSkill") as HTMLHeadingElement;

var output = document.querySelector(".output") as HTMLElement;

submit.addEventListener('click', function(event){
event.preventDefault();

outputName.innerHTML = inputName.value;
outputEmail.innerHTML = inputEmail.value;
outputPhone.innerHTML = inputPhone.value
outputEducation.innerHTML = inputEducation.value;
outputExperience.innerHTML = inputExperience.value;
outputSkill.innerHTML = inputSkill.value;
output.style.display = "block";
output.scrollIntoView({ behavior: "smooth", block:"start"})
});






