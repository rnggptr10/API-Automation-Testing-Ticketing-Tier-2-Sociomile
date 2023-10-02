describe('Statuses', () => {
  it('GET Status List', () =>{
    cy.request({
      method:'GET',
      url:'/statuses',
      failOnStatusCode:false,
    }).then((response) =>{

    })
  })

  it('POST Create New Status', () =>{
    cy.request({
      method:'POST',
      url:'/statuses',
      failOnStatusCode:false,
    }).then((response) =>{
    
    })
  })
})