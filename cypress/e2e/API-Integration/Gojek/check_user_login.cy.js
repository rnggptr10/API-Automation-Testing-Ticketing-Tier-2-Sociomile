describe("Check User Login", () => {
  const userData = {
    email: "agentccu1@uatgojek.com",
    password: "gojek123",
  };

  before("do login", () => {
    cy.request({
      method: "POST",
      url: "https://api.sociomile.net/auth/login",
      body: {
        email: userData.email,
        password: userData.password,
      },
      failOnStatusCode: false,
    }).then((responses) => {
      Cypress.env("token", responses.body.token);
    });
  });

  after("do logout", () => {
    cy.request({
      method: "GET",
      url: "https://api.sociomile.net/logout",
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`,
      },
      failOnStatusCode: false,
    });
  });

  it("check token after login", () => {
    cy.request({
      method: "GET",
      url: `https://s3-api-ng.sociomile.net/me?token=${Cypress.env("token")}`,
      failOnStatusCode: false,
    }).then((responses) => {
      
    });
  });
});
