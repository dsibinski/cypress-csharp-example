describe("Main page form", () => {
  it("should have first and last name inputs", () => {
    cy.visit("/");
    cy.get("#first-name");
    cy.get("#last-name");
  });

  it("should have submit button", () => {
    cy.visit("/");
    const button = cy.get("button");
    button.should("have.text", "Submit");
  });

  it("should display thank you text with name and last name after submitting", () => {
    cy.visit("/");

    const name = "Dawid";
    const lastName = "Sibinski";

    cy.get("#first-name").type(name);
    cy.get("#last-name").type(lastName);

    const submitButton = cy.contains("Submit");
    submitButton.click();

    cy.contains(`Thank you for submitting ${name} ${lastName}!`);
  });
});
