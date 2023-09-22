describe('Tickets', () => {
  const dataTicket = {
    id: '64f934118da23ffa50006002',
  }

  const dataGroup = {
    id: [
      '648be8b124596a47f36b9913', 
      '64ac2dc124596a54ed1bcda2', 
      '648be8d124596a4e744e9764', 
    ],
    name: [
      'Finance',
      'Lulu',
      'Tech Support'
    ]
  }

  before('do login', ()=>{
    cy.login()
  })
  
  after('do logout', ()=>{
    cy.logout()
  })
  
  describe('Get Ticket List', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('GET', `https://ticketing.ngetest.com/tickets`)
    })

    it('should return corect data', ()=>{
      cy.request({
        method:'GET',
        url:`https://ticketing.ngetest.com/tickets`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          group: dataGroup.id[1]
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })

  describe('Update Ticket Status', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', `https://ticketing.ngetest.com/tickets/set-status/${dataTicket.id}`)
    })

    it('should return corect update post', ()=>{
          cy.request({
            method:'POST',
            url:`https://ticketing.ngetest.com/tickets/set-status/${dataTicket.id}`,
            headers: {
              Authorization: `Bearer ${Cypress.env('token')}`
            },
            body:{
              status:'OTHER'
            },
            failOnStatusCode:false,
          }).then((response) => {
            // Handle the expect response 
            expect(response.status).to.equal(200);
          })
    })
  })

  describe('Group Invite', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', `https://ticketing.ngetest.com/tickets/group-invite/${dataTicket.id}`)
    })

    it('should return correct update group', ()=>{
      cy.request({
        method:'POST',
        url:`https://ticketing.ngetest.com/tickets/group-invite/${dataTicket.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          group: [
            {
              id: dataGroup.id[0],
              name: dataGroup.name[0]
            },
          ]
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })
  
  describe('Update Ticket', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('PUT', `https://ticketing.ngetest.com/tickets/${dataTicket.id}`)
    })

    it('should return correct data', ()=>{
      cy.request({
        method:'PUT',
        url:`https://ticketing.ngetest.com/tickets/${dataTicket.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          notes : "halo",
          tags : ['ok', 'Tag 1']
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
        expect(response.body.result.data.notes).to.equal("halo");
      })
    })
  })
  
  
  // kendala dari dokumentasi api
  describe('Create New Ticket', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', 'https://ticketing.ngetest.com/tickets')
    })

    it('should return correct data', ()=>{
      cy.request({
        method:'POST',
        url:`https://ticketing.ngetest.com/tickets`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          description: 'descriptions', 
          priority: 'HIGH',
          project: [
            {
              id: '90',
              name: 'Customer Care PINGOT'
            }
          ],
          user: [
            {
              id: '6472',
              name: 'Tech Yondu Udonta'
            }
          ],
          channel: 'APP',
          type: 'message',
          group: [
            {
              id: dataGroup.id[0],
              name: dataGroup.name[0]
            }
          ],
          // attacments
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })

  describe('Ticket Detail', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('GET', `https://ticketing.ngetest.com/tickets/${dataTicket.id}`)
    })

    it('should return correct data', ()=>{
      cy.request({
        method:'GET',
        url:`https://ticketing.ngetest.com/tickets/${dataTicket.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })

  describe('Group Assign', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', `https://ticketing.ngetest.com/tickets/assign-group/${dataTicket.id}`)
    })

    it('should return correct data', ()=>{
      cy.request({
        method:'POST',
        url:`https://ticketing.ngetest.com/tickets/assign-group/${dataTicket.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          group: [
            {
              id: dataGroup.id[3],
              name: dataGroup.name[3]
            },
          ]
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })

  describe('Group Escalate', ()=>{
    /*
    1. Return Unauthorized
    2. Return Correct Data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', `https://ticketing.ngetest.com/tickets/escalate/${dataTicket.id}`)
    })

    it('should return correct data', ()=>{
      cy.request({
        method:'POST',
        url:`https://ticketing.ngetest.com/tickets/escalate/${dataTicket.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        },
        body:{
          group: [
            {
              id: dataGroup.id[3],
              name: dataGroup.name[3]
            },
          ]
        },
        failOnStatusCode:false,
      }).then((response) => {
        // Handle the expect response 
        expect(response.status).to.equal(200);
      })
    })
  })
})