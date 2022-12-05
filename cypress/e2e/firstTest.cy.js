/* 
pre-req: instalar node js
          instalar visual studio 
          ejecutar los comandos de abajo*
1. npm init 
2. configuramos el proyecto 
3. npm install cypress --save-dev
4. npm run test


Localizando elementos
Por atributo: [placeholder="Contraseña"]
Por clase: .class
Por ID: #ID

//div[@class="container"]//a

*/ 
var username = 'jmendez'

/* 
#username
#password
[type="Submit"] */

describe('Pruebas Free Security', () => {
  it('CP02 - Misael', () => {
    cy.get('#username').type("username")
  });
});

describe('Pruebas Free Security', () => {
  it('CP02 - Dhamar', () => {
    cy.visit("/")
    .get("#user-name")
    .get("#password")
  });
});


describe('Pruebas Free Security', () => {
  it.only('CP02 - Israel', () => {
    cy.visit("/")
      .get("#username")
  });
});


describe("Este será mi set de pruebas", () => {
  it("CP01 - Este es mi primera prueba", () => {
    expect(true).to.equal(true);
  });
  it("CP02 - Esta es mi segunda prueba", () => {
    expect(false).to.equal(true);
  });
  it("CP03 - Localizando elementos", () => {
    cy.visit("/");
    cy.get(".nav-link")
      .contains("Register")
      .click()
      .get('[placeholder="First Name"]')
      .type("Prueba")
      .get('[name="birthdate"]')
      .type("2001-07-21");
  });
  it("CP04 - Registrando un usuario", () => {
    cy.visit("/");
  });
  it("CP05 - Login", () => {
    cy.visit("/")
      .get('[name="username"]')
      .type(username)
      .get('[name="password"]')
      .type("12345678")
      .get(".btn")
      .contains("Log In")
      .should("be.visible")
      .click()
      .get(".alert")
      .should("contain", "Welcome back " + username);
  });
});
