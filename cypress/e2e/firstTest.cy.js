describe("Este será mi set de pruebas", () => {
  it("CP01 - Este es mi primera prueba", () => {
    expect(true).to.equal(true);
  });
  it("CP02 - Esta es mi segunda prueba", () => {
    expect(false).to.equal(false);
  });
  it("Localizando elementos", () => {
    cy.visit("/");
    cy.get(".nav-link")
      .contains("Register")
      .click()
      .get('[placeholder="First Name"]')
      .type("Prueba")
      .get('[name="birthdate"]')
      .type("2001-07-21");
  });
  it("Login",()=>{
    cy.visit('/')
        .get('[name="username"]').type('jmendez')
        .get('[name="password"]').type('12345678')
        .get('.btn').contains("Log In").should('be.visible').click()
        .get('.alert').should('contain','Welcome')
  })
});
