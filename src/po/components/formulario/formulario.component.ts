import { type Page, type Locator, expect } from "@playwright/test";

export default class RegisterForm {
  //Attributes/properties/Elements
  public url =
    "https://v0-classic-registration-form-u8ghow.vercel.app/?utm_source=podia&utm_medium=broadcast&utm_campaign=2332486";
  readonly page: Page;
  readonly title: RegExp;

  constructor(page: Page) {
    this.page = page;
    this.title = /v0 App/;
  }
  //Methods
  public async goto() {
    await this.page.goto(this.url);
    await expect(this.page).toHaveTitle(this.title);
  }

  input(name: string) {
    const selectors = {
      nombre: 'input[name="nombre"]',
      apellido: 'input[name="apellido"]',
      email: 'input[name="email"]',
      telefono: 'input[name="telefono"]',
      direccion: 'input[name="direccion"]',
      ciudad: 'input[name="ciudad"]',
      codPostal: 'input[name="codigoPostal"]',
      pais: 'input[name="pais"]',
      profesion: 'input[name="profesion"]',
      intereses: 'input[name="intereses"]',
    };
    return this.page.locator(selectors[name]);
  }

  inputErrorMessage(name: string) {
    const selectors = {
      nombre: "p[id=':R6jsq:-form-item-message']",
      apellido: "p[id=':Rajsq:-form-item-message']",
      email: "p[id=':Rejsq:-form-item-message']",
      telefono: "p[id=':Rijsq:-form-item-message']",
      direccion: "p[id=':Rmjsq:-form-item-message']",
      ciudad: "#:Rqjsq:-form-item-message",
      intereses: "#:R1ajsq:-form-item-message",
    };
    return this.page.locator(selectors[name]);
  }

  get submitButton() {
    return this.page.locator('button[type="submit"]');
  }
}
