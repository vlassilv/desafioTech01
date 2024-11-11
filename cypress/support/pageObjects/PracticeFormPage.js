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
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select(year);
        cy.get('.react-datepicker__month-select').select(month);
        cy.get(`.react-datepicker__day--0${day}`).click();
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
        cy.get('#state').click().contains(state).click();
        cy.get('#city').click().contains(city).click();
    }

    submitForm() {
        cy.get('#submit').click();
    }

    verifyPopupIsVisible() {
        cy.get('.modal-content').should('be.visible');
    }

    closePopup() {
        cy.get('#closeLargeModal').click();
    }
}

export default new PracticeFormPage();