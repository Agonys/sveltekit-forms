describe("/register", () => {
  beforeEach(() => {
    cy.viewport(375, 720);
    cy.visit("http://localhost:5173");
    cy.contains("button", "Create Account").click();
    cy.url().should("include", "/register");

    //wait for $errors object to load for validation purpose.
    cy.wait(2000);
  });

  it("should form be invalid", () => {
    const username = "Użytkownik";
    const email = "a@a.p";
    const password = "12345678";
    const confirmPassword = "1234567";

    cy.get('input[name="username"]')
      .click()
      .type(username)
      .should("have.value", username);
    cy.get('input[name="username"] + p').should("exist");

    cy.get('input[name="email"]')
      .click()
      .type(email)
      .should("have.value", email);
    cy.get('input[name="email"] + p').should("exist");

    cy.get('input[name="password"]')
      .click()
      .type(password)
      .should("have.value", password);
    cy.get('input[name="password"] + p').should("exist");

    cy.get('input[name="confirmPassword"]')
      .click()
      .type(confirmPassword)
      .should("have.value", confirmPassword);

    cy.get('input[name="agreement"]').check();
    cy.get('input[name="confirmPassword"] + p').should("exist");

    cy.get("button").contains("Register").should("be.disabled");
  });
});
