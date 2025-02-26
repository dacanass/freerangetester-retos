import { test, expect } from "@playwright/test";
import { Formulario } from "../pages/formulario-page";
// process.loadEnvFile();
// const URL = process.env.FORM_URL;

test.describe("Pruebas a los componentes del formulario", async () => {
  let formulario: Formulario;

  test.beforeEach(async ({ page }) => {
    // await page.goto(URL);
    formulario = new Formulario(page);
    await formulario.goto();
  });

  test.describe("Campo Name", async () => {
    test("Debe mostrar mensaje de error si se ingresa 1 solo letra/numero ", async () => {
      await formulario.getNameField.fill("A");
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).toBeVisible();
    });
    test.fail(
      "Debe mostrar mensaje de error si se ingresan caracteres especiales ",
      async () => {
        await formulario.getNameField.fill("@@@");
        await formulario.getNameField.press("Enter");
        await expect(formulario.getNameErrorMessage).toBeVisible();
      }
    );
    test.fail(
      "Debe mostrar mensaje de error si se ingresan espacios en blanco al inicio del nombre ",
      async () => {
        await formulario.getNameField.fill(" aaa");
        await formulario.getNameField.press("Enter");
        await expect(formulario.getNameErrorMessage).toBeVisible();
      }
    );
    test.fail(
      "Debe mostrar mensaje de error si se ingresan espacios en blanco al final del nombre ",
      async () => {
        await formulario.getNameField.fill("aaa ");
        await formulario.getNameField.press("Enter");
        await expect(formulario.getNameErrorMessage).toBeVisible();
      }
    );
    test.fail(
      "Debe mostrar mensaje de error si se ingresan un nombre con espacios en blanco en el medio",
      async () => {
        await formulario.getNameField.fill("a aa");
        await formulario.getNameField.press("Enter");
        await expect(formulario.getNameErrorMessage).toBeVisible();
      }
    );
    test("Debe mostrar mensaje de error si se deja vacio ", async () => {
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).toBeVisible();
    });
    test("Debe aceptar un nombre valido de 2 numeros/letras", async () => {
      await formulario.getNameField.fill("aa");
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).not.toBeVisible();
    });
    test("Debe aceptar un nombre valido de 3 numeros/letras", async () => {
      await formulario.getNameField.fill("aaa");
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).not.toBeVisible();
    });
    test("Debe aceptar un nombre valido con numeros y letras", async () => {
      await formulario.getNameField.fill("Aaa123");
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).not.toBeVisible();
    });
    test("Debe desaparecer el mensaje de error al corregir el error", async () => {
      await formulario.getNameField.fill("A");
      await formulario.getNameField.press("Enter");
      await expect(formulario.getNameErrorMessage).toBeVisible();
      await formulario.getNameField.fill("Aaa");
      await expect(formulario.getNameErrorMessage).not.toBeVisible();
    });
  });
});
