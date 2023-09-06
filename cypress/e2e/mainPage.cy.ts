describe("Main page", () => {
  beforeEach(() => {
    cy.viewport(375, 720);
    cy.visit("http://localhost:5173");
    cy.wait(500);
  });

  it("should have login and register button", () => {
    cy.contains("Sign In").should("exist");
    cy.contains("Create Account").should("exist");
  });
});
