describe('Valid create account', () => {
  beforeEach(() => {
    cy.login(); // auto login sebelum setiap test
  }); 

  it('User can Create new Account', () => {
     cy.create();

    //fill form
    cy.get('[id="name"]').type('budi');
    cy.get('[id="email"]').type('budi@gmail.com');
    cy.get('[id="password"]').type('Asqweqwe');
    cy.contains('Submit').click();
    
    //Assert
    cy.get('p').should('be.visible');
    cy.get('p').contains('Data Berhasil Ditambahkan');
  });

});

describe('Invalid Create Account', () => {
   beforeEach(() => {
    cy.login(); // auto login sebelum setiap test
  }); 
   it('user cannot create account with multiple email', ()=>{
    cy.create();
    //fill form
    cy.get('[id="name"]').type('user');
    cy.get('[id="email"]').type('user@gmail.com');
    cy.get('[id="password"]').type('Asqweqwe');
    cy.contains('Submit').click();
    
    //Assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').contains('The email has already been taken.');
  })

   it('user cannot create account with field name blank is empty', ()=>{
    cy.create();
    //fill form
    cy.get('[id="email"]').type('user@gmail.com');
    cy.get('[id="password"]').type('Asqweqwe');
    cy.contains('Submit').click();
    
    //Assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').contains('The name field is required.');
  })

  it('user cannot create account with field email blank is empty', ()=>{
    cy.create();
    //fill form
    cy.get('[id="name"]').type('user');
    cy.get('[id="password"]').type('Asqweqwe');
    cy.contains('Submit').click();
    
    //Assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').contains('The email field is required.');
  })

  it('user cannot create account with field password blank is empty', ()=>{
    cy.create();
    //fill form
    cy.get('[id="name"]').type('user');
    cy.get('[id="email"]').type('user@gmail.com');
    cy.contains('Submit').click();
    
    //Assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').contains('The password field is required.');
  })

   it('user cannot create account with all field blank is empty', ()=>{
    cy.create();
    cy.contains('Submit').click();
    //Assert
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').contains('The name field is required.');
    cy.get('.invalid-feedback').contains('The email field is required.');
    cy.get('.invalid-feedback').contains('The password field is required.');
  })
})
