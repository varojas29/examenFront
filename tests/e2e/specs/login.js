describe('Login', () => {
    it('Redirecciona al home si el login es exitoso', () => {
        cy.visit('/login')
        cy.get('#email').type('user1@mystore.com')
        cy.get('#password').type('password')
        cy.get('.button.is-danger').click()

        cy.get('.navbar-burger').click()
        cy.get('#navbarMenu').contains('Usuario')
      })
})