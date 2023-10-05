describe("Booking", () => {
  describe("Booking Transport", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/transport",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "RB-142808-0962067",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/transport",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "RB-142808-0962067",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Goshop", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/goshop",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "SH-901081195",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/goshop",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "SH-901081195",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gosend", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gosend",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-11-2950158",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gosend",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-11-2950158",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gosend Transport", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gosend-transport",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-91-45271",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gosend-transport",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-91-45271",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gosend Gomart", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gomart",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "MT-5421012876",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gomart",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "MT-5421012876",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gofood Pickup", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gofood-pickup",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "FP-95335",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gofood-pickup",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "FP-95335",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gofood", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gofood",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "F-68720655550",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gofood",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "F-68720655550",
          care_unit: "CCU",
          country_code: "ID",
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

  describe("Booking Gobox", () => {
    it("all body request are filled", () => {
      cy.request({
        method: "POST",
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gobox",
        body: {
          email: "agent@email.com",
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-21-15820973",
          care_unit: "CCU",
          country_code: "ID",
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
        url: "https://139.59.248.179:4434/api/v1/goto/salesforces/booking/gobox",
        body: {
          user_id: "12345",
          role: "Agent Level 1",
          order_no: "GK-21-15820973",
          care_unit: "CCU",
          country_code: "ID",
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
});
