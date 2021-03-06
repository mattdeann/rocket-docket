describe('Rocket Details', () => {
  it('should have details about a rocket', () => {
    cy.fixture('mockUpcoming.json')
      .then((response) => {
        cy.intercept('https://ll.thespacedevs.com/2.0.0/launch/upcoming', {
          statusCode: 200,
          body: response
        })
      })
    cy.fixture('mockRecent.json')
    .then((response) => {
      cy.intercept('https://ll.thespacedevs.com/2.0.0/launch/previous', {
        statusCode: 200,
        body: response
      })
    })

    cy.visit('http://localhost:3000/rocket-docket')

    cy.get('.more-info').first().click()
    cy.get('.rocket-info').within(() => {
      cy.get('.rocket-name').should('have.text', 'Falcon 9 Block 5 | Starlink 17')
      cy.get('.summary.info-header').should('have.text', 'Mission Summary:')
      cy.get('.summary.info-content').should('have.text', 'A batch of 60 satellites for Starlink mega-constellation - SpaceX\'s project for space-based Internet communication system.')
      cy.get('.date.info-header').should('have.text', 'Launch Date and Time:')
      cy.get('.date.info-content').should('have.text', '2021-03-04T08:24:00Z')
      cy.get('.agency.info-header').should('have.text', 'Launch Agency:')
      cy.get('.agency.info-content').should('have.text', 'SpaceX')
      cy.get('.location.info-header').should('have.text', 'Location:')
      cy.get('.location.info-content').should('have.text', 'Launch Complex 39A at Kennedy Space Center, FL, USA')
      cy.get('.webcast.info-header').should('have.text', 'Webcast available elsewhere')
    })
   
  })

  it('should have a picture of the rocket and a functioning back button', () => {
    



  })
})