describe('Tests automatisés', () => {
  it('successful registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="firstName"]').type('Mikhail')
    cy.get('input[id="lastName"]').type('Li')
    cy.get('input[id="signup-email"]').type('mikhail12345@gmail.fr')
    cy.get('input[id="signup-password"]').type('Lm123456')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
  it('failed registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="firstName"]').type('Mikhail')
    cy.get('input[id="lastName"]').type('Li')
    cy.get('input[id="signup-email"]').type('mikhail12345@gmail.fr')
    cy.get('input[id="signup-password"]').type('123456')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
    cy.contains('p', 'Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre').should('be.visible')
  })
  it('authentification', () => {
   cy.visit('https://preprod.backmarket.fr/register')
   cy.get('input[id="signin-email"]').type('mikhail12345@gmail.fr')
   cy.get('input[id="signin-password"]').type('Lm123456')
   cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
  
})