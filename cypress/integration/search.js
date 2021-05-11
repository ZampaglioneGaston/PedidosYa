
/// <reference types="cypress"/>

describe('DeliveryPizza', function(){

    it('PedidosYa', function(){
        cy.visit('/');                                                                 // Ingreso a Pedidos Ya.

        cy.fixture('Direction').then((parameter) => {                      
            cy.World(parameter.Country, parameter.CityList, parameter.CityIndex, 121)  // Cordoba
            cy.get(parameter.Adress).type('Duarte Quiros 10')
            cy.get(parameter.Option).type('Pizza')
            cy.AcceptMap(parameter.SearchB, parameter.ConfirmMap);
        })


        cy.fixture('Direction').then((parameter) => {                       
            cy.get(parameter.Sort).click();                                            // Menu de ordenamiento
        })
    
        cy.sort('[value="rating"] > a');                                               // Ordeno por puntuacion
        cy.restaurant('[data-url="https://www.pedidosya.com.ar/restaurantes/cordoba/grido-helados-3122-velez-sarsfield-ii-av-velez-sarsfield-272-menu"] > .restaurantData > .infoFooter > .callToAction > .button');

        cy.item('[data-id="23570597"] > b');                                           // Item > pizza
        cy.wait(1000);
        cy.fixture('Direction').then((parameter) =>{
            cy.get(parameter.OptionalText).type('Que venga caliente pls')              // Opcional en pedido
            cy.wait(1000);
            cy.get(parameter.AddDelivery).click();                                     // Boton agregar al pedido
            cy.wait(1000);  
        })
            

        cy.fixture('Direction').then((parameter) => {
            cy.get(parameter.Adress).type('Duarte Quiros 10', {force: true})  
            cy.AcceptMap(parameter.SearchB, parameter.ConfirmMap); 
        });   

    })
})

