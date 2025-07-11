describe('Validate delete user account', () => {
  before(() => {
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

