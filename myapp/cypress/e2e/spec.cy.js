describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it("click on increment and decrement and check the value of count", () => {
    cy.visit('http://localhost:3000/')
    cy.get('.controls > :nth-child(1)').click();

    cy.get('.count').should('contain.text', 1);
     

    for(let i = 0; i < 15; i++){
      cy.get('.controls > :nth-child(1)').click();
    }
    cy.get('.controls > :nth-child(2)').click();
    cy.get('.count').should('contain.text', 15);
  })


  it("click on increment and decrement and check the message", () => {
    cy.visit('http://localhost:3000/')

     cy.get('.count').should('contain.text', 0);

    cy.get('p').should(($p) => {
      // should have found 2 elements
      expect($p).to.have.length(2)
    
     // make sure the first contains Lower text content
     expect($p.first()).to.contain('Lower')
      })


    for(let i = 1; i <= 20; i++){
      cy.get('.controls > :nth-child(1)').click();

      cy.get('p').should(($p) => {
       if(i <= 5) expect($p.first()).to.contain('Lower')
       else if(i > 5 && i <= 15) {
         expect($p.first()).not.to.contain('Lower');
         expect($p.first()).not.to.contain('Higher');
       }
       else {
        expect($p.first()).to.contain('Higher');
       }
      })
    }
  })
})