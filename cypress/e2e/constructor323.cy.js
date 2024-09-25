import { BASE_URL } from "../../src/utils/api";

describe("Constructor page works correctly", () => {
  beforeEach(() => {
    cy.intercept("POST", `${BASE_URL}/orders`).as("postOrder");
    cy.intercept("POST", `${BASE_URL}/auth/login`).as("login");
    cy.intercept("GET", `${BASE_URL}/auth/user`).as("getUserInfo");
    cy.intercept("GET", `${BASE_URL}/ingredients`).as("getIngredients");
    cy.intercept("POST", `${BASE_URL}/auth/token`).as("refreshToken");

    cy.visit("/login");
    cy.get("[class^=appHeader_link__q8m04]").contains("Личный кабинет").click();
    cy.get("input[type=email]", { timeout: 10000 }).type(
      "artem01234567@mail.ru"
    );
    cy.get("input[type=password]", { timeout: 10000 })
      .should("be.visible")
      .type("artem012345");
    cy.get("button").contains("Войти").click();
    cy.wait("@login");
  });

  it("should open ingredients popup", () => {
    cy.get("[class*=IngredietnsList_item__card__]").first().click();
    cy.get("[class*=dialogmodal_btn__close__]").click();
  });

  it("constructor should work", () => {
    cy.visit("/");
    cy.get("[class*=buegerIngridients_container__drag-item__]")
      .contains("Мясо")
      .first()
      .as("main");

    cy.get("[class*=buegerIngridients_container__drag-item__]")
      .contains("булка")
      .first()
      .as("bun");

    cy.get("[class*=burgerconstructor_burger__constructor__]").as(
      "constructor"
    );
    cy.get("button").contains("Оформить заказ").as("submit");

    cy.get("@bun").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@main").trigger("dragstart");
    cy.get("@constructor").trigger("drop");

    cy.get("@submit").click().wait("@postOrder");
    cy.get("[class*=dialogmodal_btn__close__nYtG7]").click();
  });
});

export {};
