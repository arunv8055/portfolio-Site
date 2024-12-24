// Function to calculate age
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

// Set the birthdate
const birthDate = '1999-08-06T06:52:00+05:30'; // IST (Indian Standard Time)

// Function to update age in the HTML
function updateAge() {
    const age = calculateAge(birthDate);
    document.getElementById('age').textContent = `${age} years old`;
}

// Initial age calculation and updating
updateAge();

// Update the age every second (1000 milliseconds)
setInterval(updateAge, 1000);
