/// <reference types="cypress" />
describe("page", () => {
  it("should work", () => {
    cy.visit("https://34ir1q.csb.app?standalone");
    cy.get("select[name=select]").select("2");
  });
});
