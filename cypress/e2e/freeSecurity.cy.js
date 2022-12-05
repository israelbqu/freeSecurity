var username = "jmendez"

describe('Pruebas Free Security', () => {
    it.only('CP02 - Israel', () => {
        cy.viewport(390, 8440)
      cy.visit("/")
      .get("#login2").click()
      .get("#loginusername").type("jmendez")
      .get("#loginpassword").type("123456")
      .get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()
      .get("#nameofuser")
        .should("contain", "Welcome " + username)
<<<<<<< HEAD
=======

      


//      .get("#user-name")

//jmendez - 123456

>>>>>>> 475b1658201bff91a798bdc862ffe94aec98171d
    });
  });