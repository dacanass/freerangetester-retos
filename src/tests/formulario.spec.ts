import { test, expect } from "@playwright/test";
import FormularioPage from "../po/pages/formulario-page";
// process.loadEnvFile();
// const URL = process.env.FORM_URL;

//Declare the variable formularioPage of type FormularioPage globaly
let formularioPage: FormularioPage;

test.describe("Pruebas a los componentes del formulario", async () => {
  test.beforeEach(async ({ page }) => {
    formularioPage = new FormularioPage(page);
    await formularioPage.formulario.goto();
  });

  test("Campo Nombre debe mostrar un mensaje de error al ingresar menos de 2 caracteres", async () => {
    await formularioPage.formulario.input("nombre").fill("A");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe mostrar un mensaje de error si se ingresan caracteres especiales ", async () => {
    await formularioPage.formulario.input("nombre").fill("@@@");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe mostrar un mensaje de error si se ingresan espacios en blanco al inicio del nombre ", async () => {
    await formularioPage.formulario.input("nombre").fill(" aaa");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe mostrar un mensaje de error si se ingresan espacios en blanco al final del nombre", async () => {
    await formularioPage.formulario.input("nombre").fill("aaa ");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe mostrar un mensaje de error si se ingresan un nombre con espacios en blanco en el medio", async () => {
    await formularioPage.formulario.input("nombre").fill("a aa");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe mostrar un mensaje de error si se deja vacio ", async () => {
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
  });

  test("Campo Nombre debe aceptar un nombre valido de 2 numeros/letras", async () => {
    await formularioPage.formulario.input("nombre").fill("aa");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).not.toBeVisible();
  });

  test("Campo Nombre debe aceptar un nombre valido de 3 numeros/letras", async () => {
    await formularioPage.formulario.input("nombre").fill("aaa");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).not.toBeVisible();
  });

  test("Campo Nombre debe aceptar un nombre valido con numeros y letras", async () => {
    await formularioPage.formulario.input("nombre").fill("Aaa123");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).not.toBeVisible();
  });

  test("Campo Nombre debe desaparecer el mensaje de error al corregir el error", async () => {
    await formularioPage.formulario.input("nombre").fill("A");
    await formularioPage.formulario.submitButton.click();
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).toBeVisible();
    await formularioPage.formulario.input("nombre").fill("Aaa");
    await expect(
      formularioPage.formulario.inputErrorMessage("nombre")
    ).not.toBeVisible();
  });
});
