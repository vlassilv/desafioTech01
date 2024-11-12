import PracticeFormPage from '../pageObjects/PracticeFormPage';

describe('Teste do Formulário no DemoQA com Page Object', () => {
    before(() => {
        cy.visit('https://demoqa.com/');
    });

    it('Deve acessar o formulário de prática e preencher todos os campos', () => {
        PracticeFormPage.navigateToForms();
        PracticeFormPage.openPracticeForm();
        PracticeFormPage.fillFirstName('John');
        PracticeFormPage.fillLastName('Doe');
        PracticeFormPage.fillEmail('johndoe@example.com');
        PracticeFormPage.selectGender(1); // 1 = Male, 2 = Female, 3 = Other
        PracticeFormPage.fillPhoneNumber('1234567890');
        PracticeFormPage.setDateOfBirth('1995', 'April', '15');
        PracticeFormPage.selectHobbies(1, 2); // 1 = Sports, 2 = Reading, etc.
        PracticeFormPage.uploadFile('sample.txt'); // Certifique-se de que o arquivo está em cypress/fixtures/
        PracticeFormPage.fillAddress('123 Test Street');
        PracticeFormPage.selectStateAndCity();
        PracticeFormPage.submitForm();
        PracticeFormPage.verifyPopupIsVisible();
        PracticeFormPage.closePopup();
    });
});