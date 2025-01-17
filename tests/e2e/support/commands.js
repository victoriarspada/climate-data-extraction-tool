// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// VarSelect.vue or dropdown components
import 'cypress-wait-until';

Cypress.Commands.add('selectVar', (getInput, text, value) => {
  cy.get(getInput).scrollIntoView().wait(250).select(text).should('have.value', value)
  return cy.get(getInput)
})

// OptionRadio.vue or radio components
Cypress.Commands.add('selectRadio', (name, value) => {
  cy.get(`[name="${name}"]`).check(value).should('have.value', value)
})

// DateSelect.vue or text input components
Cypress.Commands.add('inputText', (getInput, typeInput) => {
  cy.get(getInput).scrollIntoView().wait(250).clear().type(typeInput)
})

// Leaflet map clustering
Cypress.Commands.add('checkMarkerClusters', (minClusterCount) => {
  cy.get('div.leaflet-container div.leaflet-map-pane div.leaflet-marker-pane').scrollIntoView().wait(250).find('div.marker-cluster').should(($div) => {
    expect($div.length).to.be.greaterThan(minClusterCount)
  })
})

// Click on leaflet map
Cypress.Commands.add('clickOnMap', (clickInput) => {
  cy.get('#bbox-map').scrollIntoView().wait(250).click(clickInput)
  cy.get('.leaflet-pane.leaflet-marker-pane').find('img.leaflet-marker-icon').should('be.visible')
  cy.wait(250) // mimic mini pause after clicking on map
})
