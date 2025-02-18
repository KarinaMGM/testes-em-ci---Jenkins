
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('checkout', (nome, sobrenome, pais, endereco, complemento, cidade, estado, cep, telefone, email) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type(pais)
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_address_2').clear().type(complemento)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click()
    cy.get('.select2-search__field').type(estado)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)

})