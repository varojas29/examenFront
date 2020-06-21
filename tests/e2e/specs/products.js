// describe('Products page', () => {
//     it('Filters product list', () => {
//       cy.visit('/')
//       cy.get('.column').should('have.length',14)      
//       cy.get('input').type('montaña')
//       cy.get('.column').should('have.length',1)
      
//       cy.get('input').clear().type('guitarra')
//       cy.get('.column').should('have.length',0) 
//     })

//     it('Añade productos al carrito', () => {
//         cy.visit('/')
//         cy.get('input').clear()
//         cy.get('.card button.is-pulled-right').first().click()
//         cy.get('.navbar-burger').click()
//         cy.get('span.tag.is-link').contains('1')
//     })

//     it('Elimina productos del carrito', () => {
//         cy.visit('/')
//         cy.get('.card button.is-pulled-right').first().click()
//         cy.get('.navbar-burger').click()
//         cy.get('[data-testId="cart"]').click()
//         cy.get('.modal-card-body').find('div.card-content').should('have.length',1)
//         cy.get('[data-testId="clearcart"]').click()
//         cy.get('.modal-card-head').contains('Tu carrito de compras está vacío.')
//     })
// })