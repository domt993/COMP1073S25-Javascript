const output = document.querySelector("ul");

// Constructor function for creating a new profile object
function Profile(name, location, targetRole, experience, education, skills, certifications, languages, portfolio, relocate, remote, additionalSkills, internships) {
    this.name = name;
    this.location = location;
    this.targetRole = targetRole;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
    this.certifications = certifications;
    this.languages = languages;
    this.portfolio = portfolio;
    this.relocate = relocate;
    this.remote = remote;
    this.additionalSkills = additionalSkills;
    this.internships = internships;
    this.describe = function() {
        return `
        Name: ${this.name}\n
        Location: ${this.location}\n
        Role: ${this.role}\n  
        Experience: ${this.experience} years\n
        Education: ${this.education}\n
        Skills: ${this.skills.join(', ')}\n
        Certifications: ${this.certifications.join(', ')}\n
        Languages: ${this.languages.join(', ')}\n
        Portfolio: ${this.portfolio}\n
        Relocation: ${this.relocate ? 'Yes' : 'No'}\n
        Willing to Relocate: ${this.relocate}\n
        Remote Work: ${this.remote}\n
        Additional Skills: ${this.additionalSkills.join(', ')}\n 
        Internships: ${this.internships}`;
    };
}

// Create a new profile object
let profile = new Profile ("Emily Zhang", "Vancouver, BC", "Frontend Developer", 2, "Diploma in Web Development, BCIT", ["HTML", "CSS", "JavaScript", "React"], ["Responsive Web Design (freeCodeCamp)"], ["English", "Mandarin"], "https://emilycodes.dev", false, true, ["Problem Solving", "Time Management"], false);

// Function to display the profile information in the output element
function displayProfile(profile) {
    // looping through each key in the profile object
    for (let key in profile) {
        // Skip the describe method
        if (typeof profile[key] === 'function') continue; // Skip methods
        // Create a new list item for each key-value pair
        let li = document.createElement("li");
        li.textContent = `${key}: ${profile[key]}`;
        output.appendChild(li);
        
        
    }
}

// Calling te function to display the profile information
displayProfile(profile);
