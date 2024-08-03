export const testTituloValido = () => {
  cy.visit("./src/index.html");
  cy.title().should("be.equal", "LOCALIZA CEP");
};

export const testCepValido = () => {
  cy.get("#entrada").type("08470750");
  cy.get("img#btn").click();

  cy.get(".resultado-container").should("be.visible");
  cy.get(".codigoPostal").should("text", "08470-750");
  cy.get(".bairro").should("text", "Cidade Tiradentes");
  cy.get(".logradouro").should("text", "Rua Mário Sobral");
  cy.get(".localidade").should("text", "São Paulo");
};

export const testLinksMaps = () => {
  cy.get(".link")
    .should("have.attr", "target", "_blank")
    .should("have.attr", "href")
    .and("include", "https://www.google.com.br/maps/place/08470750");
};

export const testCepInexistente = () => {
  cy.get("#entrada").clear().should("have.value", "");
  cy.get("#entrada").type("00000000");
  cy.get("img#btn").click();
  cy.get(".inexistente").should("text", "CEP inexistente");

  cy.get(".resultado-container").should("be.visible");
  cy.get(".link").should("have.attr", "href").and("include", "#");
};

export const testCepFormatoInvalido = () => {
  cy.get("#entrada").clear().should("have.value", "");
  cy.get("#entrada").type("000.000.00");
  cy.get("img#btn").click();
  cy.get(".resultado-container").should("be.visible");
  cy.get(".erro").should(
    "text",
    "Digite um CEP com 8 dígitos sem pontos ou traços."
  );
};

export const testContinuaVazioNaoNumerico = () => {
  cy.get("#entrada")
    .clear()
    .should("have.value", "")
    .type("abcdefgh")
    .should("have.value", "");
};
