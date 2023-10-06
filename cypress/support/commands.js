 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

      cy.get('#firstName').type('Fabricio')
      cy.get('#lastName').type('Perrone')
      cy.get('#email').type('fabricio@exemplo.com.br')
      cy.get('#open-text-area').type('Teste')
      cy.contains('button', 'Enviar').click()
 })
