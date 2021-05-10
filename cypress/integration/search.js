
/// <reference types="cypress"/>

describe('DeliveryPizza', function(){

    it('PedidosYa', function(){
        cy.visit('/');                                                     //Ingreso a pedidos ya Argentina.

        cy.fixture('Direction').then((variables) => {                      //Ingreso direccion, ciudad, opcion.
            cy.get(variables.Country).click();                       
            cy.get(variables.City).click();  
            cy.city('[data-option-array-index="121"]');                    //Cordoba
            cy.get(variables.Adress).type('Duarte Quiros 10')
            cy.get(variables.Option).type('Pizza')
        })

        cy.search('#search')
        cy.wait(1000);                                                      //Delay para que carge el mapa
        cy.ConfirmMap('#confirm');                                          // Confirmo Mapa 

        cy.fixture('Direction').then((variables) => {                       //Ingreso direccion, ciudad, opcion.
            cy.get(variables.Sort).click();                                 //Menu de ordenamiento
        })
    
        cy.sort('[value="rating"] > a');                                    // Ordeno por puntuacion
        cy.restaurant('[data-url="https://www.pedidosya.com.ar/restaurantes/cordoba/grido-helados-3122-velez-sarsfield-ii-av-velez-sarsfield-272-menu"] > .restaurantData > .infoFooter > .callToAction > .button');

        cy.item('[data-id="23570597"] > b');                                // Item > pizza
        cy.wait(1000);
        cy.fixture('Direction').then((variables) =>{
            cy.get(variables.OptionalText).type('Que venga caliente pls')   //Opcional en pedido
            cy.wait(1000);
            cy.get(variables.AddDelivery).click();                          //Boton agregar al pedido
            cy.wait(1000);  
        })
            

        cy.fixture('Direction').then((variables) => {
            cy.get(variables.Adress).type('Duarte Quiros 10', {force: true})  
        });   

        cy.search('#search');                                               
        cy.wait(3000);                                                      //Delay para que carge el mapa
        cy.ConfirmMap('#confirm');                                          // Confirmo Mapa                                                            

    })
})

