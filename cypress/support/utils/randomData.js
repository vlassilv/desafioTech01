export function getRandomFirstName() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
}

export function getRandomLastName() {
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
}

export function getRandomEmail() {
    return `user${Math.floor(Math.random() * 1000)}@example.com`;
}

export function getRandomPhoneNumber() {
    return `${Math.floor(Math.random() * 900000000) + 100000000}`;
}

export function getRandomGender() {
    return Math.floor(Math.random() * 3) + 1;
}

export function getRandomDateOfBirth() {
    const year = Math.floor(Math.random() * 30) + 1980;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    return { year, month, day };
}

export function getRandomHobbies() {
    const hobbies = [1, 2, 3];
    return hobbies.filter(() => Math.random() > 0.5);
}

export function getRandomAddress() {
    const addresses = ['123 Cypress St.', '456 Testing Ave.', '789 Automation Blvd.', '101 QA Rd.', '202 Random Ln.'];
    return addresses[Math.floor(Math.random() * addresses.length)];
}