describe('Loading Stage', () => {
  beforeEach(() => {
    cy.fixture("mockUpcoming.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/upcoming", {
          statusCode: 200,
          delay: 5000,
          body: response
        })
      })
    cy.fixture("mockRecent.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/previous", {
          statusCode: 200,
          delay: 5000,
          body: response
        })
      })
    cy.visit('http://localhost:3000/rocket-docket/')
  })

  it('should display a loading component while waiting for fetch response', () => {
    cy.visit('http://localhost:3000/rocket-docket/')

    cy
      .get('.loading-screen').should('have.text', 'Loading...')
      .get('.loading-image').should('have.attr', 'src', '/static/media/rocket-docket-logo.741c2a33.png')
   
  })
})