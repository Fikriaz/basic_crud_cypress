describe('Validate login user', () => {

  
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
describe('Invalid login user', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8000');
    cy.exec('npm run reset-db', {
      cwd: 'D:/ProjectQA/demo-app-cypress-automation',
      shell: 'cmd.exe'
    });
  });

  it("Cannot login with wrong email and password", () => {
    cy.get('[data-id="email"]').type("wronguser@gmail.com");
    cy.get('[data-id="password"]').type("wrongpassword");
    cy.get('[data-id="submit"]').click();

    //assertion
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("These credentials do not match our records.")
  });

  it("Cannot login with valid email but wrong password", () => {
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("wrongpassword");
    cy.get('[data-id="submit"]').click();
    
    //assertion
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("These credentials do not match our records.")
  });

  it("Cannot login with wrong email but valid password", () => {
    cy.get('[data-id="email"]').type("wronguser@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();
    
    //assertion
     cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("These credentials do not match our records.")
  });
  

  it("Cannot login with empty email and password", () => {
    cy.get('[data-id="submit"]').click();
    
    //assertion
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("The email field is required.")
     cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("The password field is required.")
  });


  it("Cannot login with only email filled", () => {
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="submit"]').click();
     
    //assertion
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("The password field is required.")
  });

  it("Cannot login with only password filled", () => {
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();

      //assertion
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains("The email field is required.")
  });

});
