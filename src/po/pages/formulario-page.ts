import RegisterForm from "../components/formulario/formulario.component";
import { test, expect,Page } from "@playwright/test";

export default class FormularioPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get formulario() {
    return new RegisterForm(this.page);
  }
}
// export default (page: Page) => new FormularioPage(page);