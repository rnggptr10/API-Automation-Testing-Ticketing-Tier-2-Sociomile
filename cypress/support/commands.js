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
Cypress.Commands.add('login', ()=>{
    const userData = {
        email:"tier2.1@ngetest.com",
        password:"123123"
    }

    // for ui
    // cy.visit('https://sm.s45.in/login')
    // cy.get(':nth-child(1) > .form-control').type(userData.email)
    // cy.get(':nth-child(3) > .form-control').type(userData.password)
    // cy.get('#btnlogin').click()
    // cy.wait(6000)

    // for api
    cy.request({
        method:'POST',
        url : 'https://api-sm.s45.in/auth/login',
        body:{
          email:userData.email,
          password:userData.password
        },
        failOnStatusCode: false
    }).then((responses) =>{
        Cypress.env('token', responses.body.token)
    })

})

Cypress.Commands.add('logout', ()=>{
    // for ui
    // cy.get('[data-toggle="dropdown"] > div > img').click()  
    // cy.get('.user-nav > .dropdown-menu > :nth-child(6) > a').click()
    // cy.wait(6000)

    // for api
    cy.request({
        method:'GET',
        url : 'https://api-sm.s45.in/logout',
        headers: {
            Authorization: `Bearer ${Cypress.env('token')}`
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('unauthorized', (responses) =>{
    expect(responses.status).to.eq(404)
    expect(responses.body.message).to.eq('Route [login] not defined.')
})

Cypress.Commands.add('checkUnauthorized', (method, url)=>{
    cy.request({
        method,
        url, 
        headers: {
            Authorization:null
        },
        failOnStatusCode:false,
    }).then((response) => {
        cy.unauthorized(response)
    })
})