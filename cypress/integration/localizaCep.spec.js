context("Localiza Cep", () => {
  it("verifica o titulo da aplicação", () => {
    cy.visit("./src/index.html");
    cy.title().should("be.equal", "LOCALIZA CEP");
  });

  it("Verifica o retorno de um cep valido e container visivel", () => {
    cy.get("#entrada").type("08470750");
    cy.get("img#btn").click();

    cy.get(".resultado-container").should("be.visible");

    cy.get(".codigoPostal").should("text", "08470-750");
    cy.get(".bairro").should("text", "Cidade Tiradentes");
    cy.get(".logradouro").should("text", "Rua Mário Sobral");
    cy.get(".localidade").should("text", "São Paulo");
  });

  it("Verificar links que levam ao Maps", () => {
    cy.get(".link")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href")
      .and("include", "https://www.google.com.br/maps/place/08470750");
  });

  it("Verificar cep inexistente", () => {
    cy.get("#entrada").clear().should("have.value", "");
    cy.get("#entrada").type("00000000");
    cy.get("img#btn").click();

    cy.get(".resultado-container").should("be.visible");
    cy.get(".inexistente").should("text", "CEP inexistente");
    cy.get(".link").should("have.attr", "href").and("include", "#");
  });

  it("Verificar cep com formatação invalida ", () => {
    cy.get("#entrada").clear().should("have.value", "");
    cy.get("#entrada").type("000.000.00");
    cy.get("img#btn").click();
    cy.get(".resultado-container").should("be.visible");
    cy.get(".erro").should(
      "text",
      "Digite um CEP com 8 dígitos sem pontos ou traços."
    );
  });

  it("campo cep continua vazio quando preenchido com valor não numerico", () => {
    cy.get("#entrada")
      .clear()
      .should("have.value", "")
      .type("abcdefgh")
      .should("have.value", "");
  });
});

import {
  testTituloValido,
  testCepValido,
  testLinksMaps,
  testCepInexistente,
  testCepFormatoInvalido,
  testContinuaVazioNaoNumerico,
} from "../support/reutilizaveis.js";

context("Localiza Cep responsivo (Tablet)", () => {
  beforeEach(() => {
    cy.viewport(820, 1180);
  });
  it("verifica o titulo da aplicação", testTituloValido);
  it("Verifica o retorno de um cep valido e container visivel", testCepValido);
  it("Verificar links que levam ao Maps", testLinksMaps);
  it("Verificar cep inexistente", testCepInexistente);
  it("Verificar cep com formatação invalida ", testCepFormatoInvalido);
  it(
    "campo cep continua vazio quando preenchido com valor não numerico",
    testContinuaVazioNaoNumerico
  );
});

context("Localiza Cep responsivo (Mobile)", () => {
  beforeEach(() => {
    cy.viewport(414, 896);
  });

  it("verifica o titulo da aplicação", testTituloValido);
  it("Verifica o retorno de um cep valido e container visivel", testCepValido);
  it("Verificar links que levam ao Maps", testLinksMaps);
  it("Verificar cep inexistente", testCepInexistente);
  it("Verificar cep com formatação invalida ", testCepFormatoInvalido);

  it(
    "campo cep continua vazio quando preenchido com valor não numerico",
    testContinuaVazioNaoNumerico
  );
});

// Melhorias identificadas: adicionar um regexp para aceitar todo tipo de formatação de cep desde que seja valido
// limpar o campo de input a cada busca
