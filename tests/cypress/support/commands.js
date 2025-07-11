Cypress.Commands.add('login', (email = 'superadmin@gmail.com', password = 'password') => {
  cy.visit('http://localhost:8000');
  cy.exec('npm run reset-db', {
  cwd: 'D:/ProjectQA/demo-app-cypress-automation',
  shell: 'cmd.exe'
  });
  cy.get('[data-id="email"]').type(email);
  cy.get('[data-id="password"]').type(password);
  cy.get('[data-id="submit"]').click();
});

Cypress.Commands.add('create', () => {
    cy.get('a[data-toggle="sidebar"]').click();
    cy.contains('a.nav-link', 'Users Management').click();
    cy.contains('a.nav-link', 'User List').click();
    cy.contains('a','Create New User').click();

});
Cypress.Commands.add('edit', () => {
    cy.get('a[data-toggle="sidebar"]').click();
    cy.contains('a.nav-link', 'Users Management').click();
    cy.contains('a.nav-link', 'User List').click();
    

});

Cypress.Commands.add('user', () =>{
  cy.get('[id="name"]').type('budi');
    cy.get('[id="email"]').type('budi@gmail.com');
    cy.get('[id="password"]').type('Asqweqwe');
    cy.contains('Submit').click();
})