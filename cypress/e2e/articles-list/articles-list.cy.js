
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays twenty articles on the page', () => {
    cy.get('article').should('have.length', 20)
  })

  it('loads more articles after scrolling to bottom of the section', () => {
    cy.scrollTo('bottom');
    cy.get('article').should('have.length', 40)
  })
})
