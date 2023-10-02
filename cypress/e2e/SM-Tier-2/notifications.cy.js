describe('Notifications', () => {
  it('GET Notification List', ()=>{
    cy.request({
      method:'GET',
      url:'/notifications',
      failOnStatusCode:false,
    }).then((response) =>{

    })
  })

  it('GET Notification Unread Total', ()=>{
    cy.request({
      method:'GET',
      url:'/notifications/is-has',
      failOnStatusCode:false,
    }).then((response) =>{

    })
  })

  it('PUT Read Notification', ()=>{
    cy.request({
      method:'PUT',
      url:'/notifications/read/{id}',
      failOnStatusCode:false,
    }).then((response) =>{

    })  
  })
})