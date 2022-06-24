describe("Home page", () => { 
  beforeEach(() => { 
    cy.visit("/")
  })

  it("Get nav brand", () => {
    cy.testId("title").contains("Where")
  })

  it("Type in Search text and assert", () => { 
    cy.testId("searchText")
    cy.testId("searchText")
      .type("Indi")
      .should("have.value", "Indi")
  })

  it("Visit Country specific url", () => { 
    cy.testId("searchText")
    cy.testId("searchText")
      .type("Indi")
      .should("have.value", "Indi")

    

    cy.contains("India")
      .click()

    cy.url().should("include", "/country/")
  })
})