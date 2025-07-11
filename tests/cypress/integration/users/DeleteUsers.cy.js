describe('Validate delete user account', () => {
  before(() => {
    cy.login(); // auto login sebelum setiap test
  }); 

  it('User can delete Account', () => {
  
    //fill form
    cy.create();
    cy.user();
    //Assert
    cy.get('p').should('be.visible');
    cy.get('p').contains('Data Berhasil Ditambahkan');
  
    cy.contains('tr','budi').within(()=>{
      cy.get('[data-id=delete]').click()
    })
    cy.get('.swal-button')
    .contains('OK')
    .should("be.visible")
    .click()

    //Assert
    cy.get('p')
    .should('be.visible')
    .contains('User Deleted Successfully')
  });

  

});

describe('Invalidate delete user account', () => {
  before(() => {
    cy.login(); // auto login sebelum setiap test
  }); 

  it('User can cancle delete account', () => {
    
    //fill form
    cy.create();
    cy.user();
    
    cy.contains('tr','budi').within(()=>{
      cy.get('[data-id=delete]').click()
    })
    cy.get('.swal-button')
    .contains('Cancel')
    .should("be.visible")
    .click()

    //Assert
    cy.get('.section-header')
    .should('be.visible')
    .contains('h1','User List')
  })

});

