describe('Validate delete user account', () => {
  beforeEach(() => {
    cy.login(); // auto login sebelum setiap test
  }); 

  it('User can delete Account', () => {
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

  it('User can delete account', () => {
    cy.get('[data-id=Delete]').click()
    cy.contains('OK')
    .should("be.visible")
    .click()

    //Assert
    cy.get('p')
    .should('be.visible')
    .contains('User Deleted Successfully')

  })

});

describe('Invalidate delete user account', () => {
  beforeEach(() => {
    cy.login(); // auto login sebelum setiap test
  }); 

  it('User can Cancel delete user account', () => {
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

  it('User can cancle delete account', () => {
    cy.get('[data-id=Delete]').click()
    cy.contains('OK')
    .should("be.visible")
    .click()

    //Assert
    cy.get('.section-header')
    .should('be.visible')
    .contains('h1','User List')
    

  })

});

