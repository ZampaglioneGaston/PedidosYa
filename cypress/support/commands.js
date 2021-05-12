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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('World', (Country, CityList, CityIndex, Index) => {  // Ingreso pais y ciudad
    
    cy.get(Country).click();                       
    cy.get(CityList).click();  
    cy.get(CityIndex).eq(Index).click({force: true});     

})

Cypress.Commands.add('AcceptMap', (SearchB, ConfirmMap) => {   //Confirmo mapa y boton de busqueda
    cy.get(SearchB).click({force: true});
    cy.wait(3000); 
    cy.get(ConfirmMap).click({force: true});

})


Cypress.Commands.add('sort', (element) => {cy.get(element).click({force: true})}) 

Cypress.Commands.add('restaurant', (element) => {cy.get(element).click({force: true})}) 

Cypress.Commands.add('item', (element) => {cy.get(element).click({force: true})}) 
