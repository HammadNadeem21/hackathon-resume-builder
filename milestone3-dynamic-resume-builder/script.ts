var form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Form Submition
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();


    // Input Values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHtml = `
    <h1>Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h2>Education</h2>
    <p>${education}</p>

    <h2>Experience</h2>
    <p>${experience}</p>

    <h2>Skills</h2>
    <p>${skills}</p>

    `;

    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    } else {
        console.error("resume is missing")
    }
})

