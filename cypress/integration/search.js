
/// <reference types="cypress"/>

describe('DeliveryPizza', function(){

    before(function(){

        cy.fixture('Direction').then((parameter) => {
            this.parameter = parameter
        })
    
    })

    it('PedidosYa', function(){
        //Access
        cy.visit('/');                                                                                
        cy.World(this.parameter.Country, this.parameter.CityList, this.parameter.CityIndex, 121)  // Cordoba
        cy.get(this.parameter.Adress).type('Duarte Quiros 10')
        cy.get(this.parameter.Option).type('Pizza')
        cy.AcceptMap(this.parameter.SearchB, this.parameter.ConfirmMap);

        //Restaurant
        cy.get(this.parameter.Sort).click();                                            // Menu de ordenamiento
        cy.sort('[value="rating"] > a');                                                // Ordeno por puntuacion
        cy.restaurant('[data-url="https://www.pedidosya.com.ar/restaurantes/cordoba/grido-helados-3122-velez-sarsfield-ii-av-velez-sarsfield-272-menu"] > .restaurantData > .infoFooter > .callToAction > .button');

        //Item
        cy.item(this.parameter.OnionPizza);                                            // Item > pizza
        cy.wait(1000);

        //Delivery
        cy.get(this.parameter.OptionalText).type('Que venga caliente pls')              // Opcional en pedido
        cy.wait(1000);
        cy.get(this.parameter.AddDelivery).click();                                     // Boton agregar al pedido

        //Direction
        cy.get(this.parameter.Adress).type('Duarte Quiros 10', {force: true})  
        cy.AcceptMap(this.parameter.SearchB, this.parameter.ConfirmMap); 

    })
})

