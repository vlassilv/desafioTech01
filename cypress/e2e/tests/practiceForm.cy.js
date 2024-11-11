import PracticeFormPage from '../../support/pageObjects/PracticeFormPage';

describe('Teste do Formulário no DemoQA com Page Object', () => {
    before(() => {
        // Acessa o site DemoQA
        cy.visit('https://demoqa.com/');
    });

    it('Deve acessar o formulário de prática e preencher todos os campos', () => {
        // Acessa e abre o formulário de prática
        PracticeFormPage.navigateToForms();
        PracticeFormPage.openPracticeForm();

        // Preenche o formulário com valores
        PracticeFormPage.fillFirstName('John');
        PracticeFormPage.fillLastName('Doe');
        PracticeFormPage.fillEmail('johndoe@example.com');
        PracticeFormPage.selectGender(1); // 1 = Male, 2 = Female, 3 = Other
        PracticeFormPage.fillPhoneNumber('1234567890');
        
        // Define a data de nascimento
        PracticeFormPage.setDateOfBirth('1995', 'April', '15');

        // Seleciona hobbies
        PracticeFormPage.selectHobbies(1, 2); // 1 = Sports, 2 = Reading, etc.

        // Faz o upload do arquivo
        PracticeFormPage.uploadFile('nome_do_arquivo.txt'); // Certifique-se de que o arquivo está em cypress/fixtures/

        // Preenche o endereço
        PracticeFormPage.fillAddress('123 Test Street');

        // Seleciona estado e cidade
        PracticeFormPage.selectStateAndCity('NCR', 'Delhi');

        // Submete o formulário
        PracticeFormPage.submitForm();

        // Verifica se o popup foi aberto e fecha
        PracticeFormPage.verifyPopupIsVisible();
        PracticeFormPage.closePopup();
    });
});