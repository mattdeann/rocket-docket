describe('Rocket Details', () => {
  beforeEach(() => {
    cy.fixture("mockUpcoming.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/upcoming", {
          statusCode: 200,
          body: response
        })
      })
    cy.fixture("mockRecent.json")
      .then((response) => {
        cy.intercept("https://ll.thespacedevs.com/2.0.0/launch/previous", {
          statusCode: 200,
          body: response
        })
      })
  })

  it('should have details about a rocket', () => {
    cy.visit('http://localhost:3000/rocket-docket/')
    cy.get('.more-info').first().click()

    cy.url().should('eq', 'http://localhost:3000/rocket-docket/falcon-9-block-5-starlink-17')
    
    cy.get('.rocket-info').within(() => {
      cy.get('.rocket-name').should('have.text', 'Falcon 9 Block 5 | Starlink 17')
      cy.get('.summary.info-header').should('have.text', 'Mission Summary:')
      cy.get('.summary.info-content').should('have.text', 'A batch of 60 satellites for Starlink mega-constellation - SpaceX\'s project for space-based Internet communication system.')
      cy.get('.date.info-header').should('have.text', 'Launch Date and Time:')
      cy.get('.start-date').should('have.text', '2021-03-04')
      cy.get('.start-time').should('have.text', '08:24:00Z')
      cy.get('.agency.info-header').should('have.text', 'Launch Agency:')
      cy.get('.agency.info-content').should('have.text', 'SpaceX')
      cy.get('.location.info-header').should('have.text', 'Location:')
      cy.get('.location.info-content').should('have.text', 'Launch Complex 39A at Kennedy Space Center, FL, USA')
      cy.get('.webcast.info-header').should('have.text', 'Webcast available elsewhere')
    })
   
  })

  it('should have a picture of the rocket and a functioning back button', () => {
    cy
      .get('.rocket-image').should('have.attr', 'src', 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210121062346.png')
      .get('.back-button').should('have.text', 'Back to Home')
  })

  it('should show the error component if a bad path is entered, and allow the user to return to home', () => {
    cy.visit('http://localhost:3000/rocket-docket/some-bad-path')
    cy
      .get('.error-logo').should('have.attr', 'src', '/static/media/rocket-docket-logo.741c2a33.png')
      .get('.error-message').should('have.text', 'Oops! An error with message"404 Page not found"has occured.')
      .get('.error-back-button').should('have.text', 'Back to Home').click()
      cy.url().should('eq', 'http://localhost:3000/rocket-docket')
  })
})