describe('login test case', () => {

  
  it("User can login use valid email and password", () => {
    
    cy.visit('http://localhost:8000');
   
  cy.exec('npm run reset-db', {
  cwd: 'D:/ProjectQA/demo-app-cypress-automation',
  shell: 'cmd.exe'
  });
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.wait(1000); // Tunggu 1 detik
    cy.get('[data-id="submit"]').click();
   
    
  })


})