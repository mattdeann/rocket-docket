describe('Home Page', () => {
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


  it('displays the header and nav', () => {
    cy.visit('http://localhost:3000/rocket-docket')
    cy.url().should('eq', 'http://localhost:3000/rocket-docket')
    cy
      .get('.site-title').should('have.text', 'Rocket Docket')
      .get('.tagline').should('have.text', 'A docket of upcoming rocket launches.')
    cy
      .get('.search').should('have.attr', 'type', 'text')
      .get('.upcoming').should('have.text', 'Upcoming Launches')
      .get('.recent').should('have.text', 'Recently Launched')
  })

  it('displays upcoming and recent launches', () => {
    cy.visit('http://localhost:3000/rocket-docket')
    cy
      .get('.rocket-card').should('have.length', 3)
      .get('.rocket-card').first().should('have.css', 'background-image', 'url("https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210121062346.png")')
      .get('.rocket-card').first().within(() => {
        cy.get('.thumbnail-rocket-name').should('have.text', 'Falcon 9 Block 5 | Starlink 17')
        cy.get('.thumbnail-start-date').should('have.text', '2021-03-04')
        cy.get('.thumbnail-start-time').should('have.text', '08:24:00Z')
        cy.get('.more-info').should('have.text', 'More Info')
      })
    cy
      .get('.recent').click()
      .get('.rocket-card').should('have.length', 5)
      .get('.rocket-card').first().should('have.css', 'background-image', 'url("https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/antares2520230252b_image_20191102024633.jpeg")')
      .get('.rocket-card').first().within(() => {
        cy.get('.thumbnail-rocket-name').should('have.text', 'Antares 230+ | Cygnus CRS-2 NG-15 (S.S. Katherine Johnson)')
        cy.get('.thumbnail-start-date').should('have.text', '2021-02-20')
        cy.get('.thumbnail-start-time').should('have.text', '17:36:00Z')
        cy.get('.more-info').should('have.text', 'More Info')
      })
  })

  it('displays searched rockets and can reset to selected tab', () => {
    cy.visit('http://localhost:3000/rocket-docket')
    cy
      .get('.search').click().type('fi')
      .get('.rocket-card').should('have.length', 3)
      .get('.rocket-card').first().should('have.css', 'background-image', 'url("https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210121062346.png")')
      .get('.rocket-card').first().within(() => {
        cy.get('.thumbnail-rocket-name').should('have.text', 'Falcon 9 Block 5 | Starlink 17')
        cy.get('.thumbnail-start-date').should('have.text', '2021-03-04')
        cy.get('.thumbnail-start-time').should('have.text', '08:24:00Z')
        cy.get('.more-info').should('have.text', 'More Info')
      })
    cy
      .get('.search').click().type('{backspace}').type('{backspace}')
      .get('.rocket-card').should('have.length', 3)
  })
})