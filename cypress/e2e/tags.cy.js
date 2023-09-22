describe('Tags', () => {
  beforeEach('do login', ()=>{
    cy.login()
  })
  
  afterEach('do logout', ()=>{
    cy.logout()
  })

  describe('Tag List', () =>{
    /* 
    1. return unauthorized
    2. return correct data
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('GET', 'https://ticketing.ngetest.com/tags')
    })

    it('should be found in get all tag list', ()=>{
      // Get Token From local storage
      cy.window().then((win) => {
        const token = win.localStorage.getItem('userToken');
        if (token) {
          // Send the request with the token in the headers
          cy.request({
            method: 'GET',
            url: 'https://ticketing.ngetest.com/tags',
            headers: {
              Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false,
          }).then((response) => {
            // Handle the response if needed
            // Example: Assert that the status code is 200
            expect(response.status).to.equal(200);
          })
        } else {
          // If token is not found
          cy.log('Token not found in local storage');
        }
      })
    })
  })

  describe('Create New Tag', () =>{
    /* 
    1. return unauthorized
    2. return correct tag
    */
    it('should return unauthorized', ()=>{
      cy.checkUnauthorized('POST', 'https://ticketing.ngetest.com/tags')
    })

    it('should return correct tag', ()=>{
      // Get Token From local storage
      cy.window().then((win) => {
        const token = win.localStorage.getItem('userToken');
        if (token) {
          // Send the request with the token in the headers
          cy.request({
            method: 'POST',
            url: 'https://ticketing.ngetest.com/tags',
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: {
              name:"Tag 1"
            },
            failOnStatusCode: false,
          }).then((response) => {
            // Handle the response if needed
            // Example: Assert that the status code is 200
            expect(response.status).to.equal(200);
            expect(response.body.result.name).to.eq('Tag 1')
          })
        } else {
          // If token is not found
          cy.log('Token not found in local storage');
        }
      })
    })
  })
})