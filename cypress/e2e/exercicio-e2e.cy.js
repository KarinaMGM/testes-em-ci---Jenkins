/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => { 
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')

        cy.fixture('produtoslista').then(dados => {

            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto) 

            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)

            produtosPage.buscarProduto(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)

        })

        cy.get('.woocommerce-message>.button').click()
        cy.get('.checkout-button').click()

        cy.checkout(faker.person.firstName(), faker.person.lastName(), 'Brasil{enter}', faker.location.streetAddress(), 'Apto 101', 
        faker.location.city(), 'Paraná{enter}', '00000-000', '(00) 00000-0000', 'josimari.teste@teste.com.br')

        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait(10000)
        cy.get('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received')
        .should('contain', 'Obrigado. Seu pedido foi recebido.')
     
    });


})
