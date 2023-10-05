describe("Customer", () => {
  it("all body request are filled", () => {
    cy.request({
      method: "POST",
      url: "https://139.59.248.179:4434/api/v1/goto/salesforces/customer",
      body: {
        email: "agent@email.com",
        user_id: "12345",
        role: "Agent Level 1",
        customer_go_id: "1234464",
        customer_email: "customer@gmail.com",
        customer_phone: "+62125946964",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.presentation_kind).to.equal("sdui");
      expect(response.body.data).not.be.null;
    });
  });

  it("body request is filled except for required input (email)", () => {
    cy.request({
      method: "POST",
      url: "https://139.59.248.179:4434/api/v1/goto/salesforces/customer",
      body: {
        user_id: "12345",
        role: "Agent Level 1",
        customer_go_id: "1234464",
        customer_email: "customer@gmail.com",
        customer_phone: "+62125946964",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.response.message).to.equal(
        "audit email is mandatory"
      );
    });
  });
});
