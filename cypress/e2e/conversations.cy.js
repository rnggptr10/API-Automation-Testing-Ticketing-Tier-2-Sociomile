describe('Conversations', () => {
  beforeEach('do login', ()=>{
    cy.login()
  })
  
  afterEach('do logout', ()=>{
    cy.logout()
  })

  describe('Conversations List', ()=>{
    /*
    1. return unauthorized
    2. return correct data conversation
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('', '')
    })


  })

  describe('Reply Ticket Conversation', ()=>{
    /*
    1. return unauthorized
    2. return correct ticket conversation
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('', '')
    })
  })
})