class PracticeFormPage {
    navigateToForms() {
        cy.contains('Forms').click();
    }

    openPracticeForm() {
        cy.contains('Practice Form').click();
    }

    fillFirstName(firstName) {
        cy.get('#firstName').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastName').type(lastName);
    }

    fillEmail(email) {
        cy.get('#userEmail').type(email);
    }

    selectGender(gender) {
        cy.get(`#gender-radio-${gender}`).check({ force: true });
    }

    fillPhoneNumber(phoneNumber) {
        cy.get('#userNumber').type(phoneNumber);
    }

    setDateOfBirth(year, month, day) {
        cy.get('#dateOfBirthInput').click(); // Abre o seletor de data
        cy.get('.react-datepicker__year-select').select(year.toString());
        cy.get('.react-datepicker__month-select').select(month.toString());
        cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
    }

    selectHobbies(...hobbies) {
        hobbies.forEach(hobby => {
            cy.get(`#hobbies-checkbox-${hobby}`).check({ force: true });
        });
    }

    uploadFile(fileName) {
        cy.get('#uploadPicture').attachFile(fileName);
    }

    fillAddress(address) {
        cy.get('#currentAddress').type(address);
    }

    selectStateAndCity(state, city) {
        // Abre o dropdown de estados e seleciona o estado desejado
        cy.get('#state').should('be.visible').click();
        cy.get('#react-select-3-option-0').click();
    
        // Abre o dropdown de cidades e seleciona a cidade desejada
        cy.get('#city').should('be.visible').click();

    }

    submitForm() {
        cy.get('#submit').click();
    }

    verifyPopupIsVisible() {
        cy.get('#example-modal-sizes-title-lg').should('be.visible');
    }

    closePopup() {
        cy.get('#closeLargeModal').click({ force: true });
        cy.url().should('include', '/automation-practice-form');
    }

    getRandomFirstName() {
        const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
        return firstNames[Math.floor(Math.random() * firstNames.length)];
    }

    getRandomLastName() {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    getRandomEmail() {
        return `user${Math.floor(Math.random() * 1000)}@example.com`;
    }

    getRandomPhoneNumber() {
        return `${Math.floor(Math.random() * 900000000) + 100000000}`;
    }

    getRandomGender() {
        return Math.floor(Math.random() * 3) + 1; // Retorna 1, 2 ou 3
    }

    getRandomDateOfBirth() {
        const year = Math.floor(Math.random() * 30) + 1980;
        const month = Math.floor(Math.random() * 12);
        const day = Math.floor(Math.random() * 28) + 1; // Limita o dia entre 1 e 28 para evitar problemas com meses curtos
        return { year, month, day };
    }

    getRandomHobbies() {
        const hobbies = [1, 2, 3];
        return hobbies.filter(() => Math.random() > 0.5);
    }

    getRandomAddress() {
        const addresses = ['123 Cypress St.', '456 Testing Ave.', '789 Automation Blvd.', '101 QA Rd.', '202 Random Ln.'];
        return addresses[Math.floor(Math.random() * addresses.length)];
    }
}

export default new PracticeFormPage();