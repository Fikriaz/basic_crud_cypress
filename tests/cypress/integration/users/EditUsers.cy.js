describe('Valid edit account', () => {

beforeEach(() =>{
        cy.login();
        cy.edit();
})

  it('User can edit username', () => {

        cy.contains('tr', 'user').within(() => {
        cy.contains('Edit').click();
      });
  cy.get('[data-id="name"]', { timeout: 50000 })
  .should('not.be.disabled') // pastikan tidak disabled dulu
  .clear()
  .type('cindiana');


        cy.contains('button','Submit').click()
  
        //Assertion
        cy.get('p').should('be.visible')
        cy.get('p').contains('User Berhasil Diupdate')
   
  });

  it('User can edit email', ()=> {
    cy.contains('tr', 'user').within(()=> {
      cy.contains('Edit').click();
    })

    cy.get('#email')
    .clear()
    .type('cindiana21@gmail.com')

    cy.contains('button','Submit').click()

    //Assertion
        cy.get('p').should('be.visible')
        cy.get('p').contains('User Berhasil Diupdate')

  })

   it('User can edit username & email', ()=> {
    cy.contains('tr', 'user').within(()=> {
      cy.contains('Edit').click();
    })

    //fill form
    cy.get('[data-id="name"]', { timeout: 50000 })
    .should('not.be.disabled') // pastikan tidak disabled dulu
    .clear()
    .type('cindiana');
    
    cy.get('#email')
    .clear()
    .type('cindiana21@gmail.com')

    //button submit
    cy.contains('button','Submit').click()

    //Assertion
        cy.get('p').should('be.visible')
        cy.get('p').contains('User Berhasil Diupdate')

  })

});