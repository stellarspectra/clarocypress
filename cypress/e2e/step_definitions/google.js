import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('I open Google page', () => {
  cy.visit('https://www.google.com');
});

Then('I should see the Google logo', () => {
  cy.wait(3000);
  cy.get('img[alt="Google"]').should('be.visible');
  cy.wait(3000);
});


And('I open twitter page2', () => {
  cy.wait(3000);
  cy.visit('https://drive.google.com/');
  cy.wait(3000);
});
