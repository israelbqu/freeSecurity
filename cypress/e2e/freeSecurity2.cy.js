/*
buttonLogin: #login2
userName: #loginusername
Password: #loginpassword
buttonLogin2: [onclick="logIn()"]

describe - Descripción del set de pruebas, "simulando" que son los ESCENARIOS de Prueba 
<<<<<<< HEAD

=======
*/

/*
>>>>>>> 475b1658201bff91a798bdc862ffe94aec98171d
1. Ingresar a la liga (www.)
2. Dar clic en el enlace de Registro
3. Registrar Datos Personales
4. Dar clic en Registrarse
5. Visualizar página "Home" 
*/

var username = "jmendez"
describe('Free Security 2do día', () => {
    //it - Casos de prueba a ejecutar
    it('CP02 - Login - Jason', () => {
        cy.visit("/")
        .get("#login2")
        .get("#loginusername").type(username)
        .get("#loginpassword").type("123456")
        .get("[onclick='logIn()']").click()
    });

    it('CP02 - Login - Sixto', () => {
        cy.visit("/")
        .get("#login2")
        .get("#loginusername").type("jmendez")
        .get("#loginpassword").type("123456")
        .get("[onclick='logIn()']").click()
    });
    it('CP02 - Login - Abdiel', () => {
        cy.visit("/")
        .get("#login2")
        .get("#loginusername").type("jmendez")
        .get("#loginpassword").type("123456")
        .get("[onclick='logIn()']").click()
    });
    it.only('CP02 - Login - Israel', () => {
        cy.visit("/")
        .get("#login2").click()
        .get("#loginusername").type(username)
        .get("#loginpassword").type("123456")
        .get("[onclick='logIn()']").click()
        //validar home
        .get("#nameofuser").should('contain','Welcome ' + username)
    });
});