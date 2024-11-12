import PracticeFormPage from '../pageObjects/PracticeFormPage';

describe('Randomized Practice Form Test', () => {
    it('should fill and submit the form with random data', () => {
        cy.visit('https://demoqa.com');
        PracticeFormPage.navigateToForms();
        PracticeFormPage.openPracticeForm();

        const firstName = PracticeFormPage.getRandomFirstName();
        const lastName = PracticeFormPage.getRandomLastName();
        const email = PracticeFormPage.getRandomEmail();
        const phoneNumber = PracticeFormPage.getRandomPhoneNumber();
        const gender = PracticeFormPage.getRandomGender();
        const { year, month, day } = PracticeFormPage.getRandomDateOfBirth();
        const hobbies = PracticeFormPage.getRandomHobbies();
        const address = PracticeFormPage.getRandomAddress();

        PracticeFormPage.fillFirstName(firstName);
        PracticeFormPage.fillLastName(lastName);
        PracticeFormPage.fillEmail(email);
        PracticeFormPage.selectGender(gender);
        PracticeFormPage.fillPhoneNumber(phoneNumber);
        PracticeFormPage.setDateOfBirth(year, month, day);
        PracticeFormPage.selectHobbies('Sports', 'Reading', 'Music');
        PracticeFormPage.uploadFile('sample.txt'); // Nome do arquivo de teste
        PracticeFormPage.fillAddress(address);
        PracticeFormPage.selectStateAndCity('NCR', 'Delhi');

        PracticeFormPage.submitForm();
        PracticeFormPage.verifyPopupIsVisible();
        PracticeFormPage.closePopup();
    });
});