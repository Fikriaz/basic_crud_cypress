describe('Valid edit account', () => {



  it('User can edit user Account', () => {
        cy.visit('http://localhost:8000');

        cy.get('[data-id="email"]').type('superadmin@gmail.com');
        cy.get('[data-id="password"]').type('password');
        cy.get('[data-id="submit"]').click();
    
    cy.edit();

    //fill form
   
  });

});