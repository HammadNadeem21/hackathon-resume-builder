var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Form Submition
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n    <h1>Resume</h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n\n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("resume is missing");
    }
});
