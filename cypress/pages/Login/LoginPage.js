class LoginPage {
  elements = {
    claroLogo: () => cy.get('.claro-logo'),
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#kc-login"),
    errorMessage: () => cy.get('.kc-feedback-text'),
    logoutButtom: () => cy.get('#divBtn-components_Sidebar-logout'),
  };

  Validarlogo() {
    this.elements.claroLogo
  }

  typeUsername(usuarios) {
    this.elements.usernameInput().type(usuarios);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  loguearseCorrectamente(usuario, password) {
    this.elements.usernameInput().type(usuario);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  beinloguinpage() {
    cy.url().should('eq', '[]')
  }

  logout() {
    this.elements.logoutButtom().click({force:true});
  }

}

module.exports = new LoginPage();
