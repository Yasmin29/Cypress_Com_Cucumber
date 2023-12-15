const { Given } = require("@badeball/cypress-cucumber-preprocessor")

Given("que estou na página de campo de treinamento", ()=> {
    cy.visit("https://wcaquino.me/cypress/componentes.html")
})

Given("Preencho o campo nome com {string}", (nome)=> {
    cy.get('#formNome').type(nome)
})

Given("deve contar o texto {string}", (text)=> {
    cy.get('#elementosForm').should('contain.text',text )
})

Given("",()=> {
    
})
