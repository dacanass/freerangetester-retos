import { expect, type Locator, type Page } from "@playwright/test";

export class Formulario {
  //Attributes/properties/Elements
  public url =
    "https://v0-classic-registration-form-u8ghow.vercel.app/?utm_source=podia&utm_medium=broadcast&utm_campaign=2332486";
  readonly page: Page;
  readonly title: RegExp;
  readonly getNameField: Locator;
  readonly getNameErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = /v0 App/;
    this.getNameField = page.getByRole("textbox", { name: "Nombre *" });
    this.getNameErrorMessage = page.getByText(
      "El nombre debe tener al menos 2 caracteres."
    );
  }
  //Methods
  public async goto() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveTitle(this.title);
  }
}
