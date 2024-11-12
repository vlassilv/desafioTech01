import WebTablesPage from '../support/pageObjects/webTablesPage';

describe('Test Web Tables Page', () => {
  it('Add, edit, and delete a record in Web Tables', () => {
    // Dado que estou na página inicial do demoqa
    cy.visit('https://demoqa.com');

    // Quando eu navego até Elements
    cy.contains('Elements').click();

    // E eu clico em Web Tables
    cy.contains('Web Tables').click();

    // E eu crio um novo registro
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@example.com';
    const age = '30';
    const salary = '50000';
    const department = 'Engineering';
    WebTablesPage.addRecord(firstName, lastName, email, age, salary, department);

    // Verificar se o registro foi adicionado
    WebTablesPage.verifyRecordExists(firstName, lastName);

    // E eu edito o novo registro
    const newFirstName = 'Jane';
    const newLastName = 'Smith';
    WebTablesPage.editFirstRecord(newFirstName, newLastName);

    // Verificar se o registro foi editado
    WebTablesPage.verifyRecordExists(newFirstName, newLastName);

    // E eu excluo o novo registro
    WebTablesPage.deleteFirstRecord();

    // Verificar se o registro foi excluído
    cy.contains('.rt-tbody', newFirstName).should('not.exist');

    // Então eu crio dinamicamente 12 registros usando o Cucumber
    const records = Array.from({ length: 12 }, (_, i) => ({
      firstName: `First${i + 1}`,
      lastName: `Last${i + 1}`,
      email: `email${i + 1}@example.com`,
      age: `${20 + i}`,
      salary: `${40000 + i * 1000}`,
      department: 'Sales'
    }));
    WebTablesPage.createMultipleRecords(records);

    // Verificar se os 12 registros foram adicionados
    records.forEach(record => {
      WebTablesPage.verifyRecordExists(record.firstName, record.lastName);
    });

    // E eu excluo todos os registros criados
    WebTablesPage.deleteAllRecords();

    // Verificar se todos os registros foram excluídos
    cy.get('.rt-tbody').children().should('have.length', 0);
  });
});