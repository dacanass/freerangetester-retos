# Retos

### Tabla de contenido

- [Reto 1: Formularios](#reto-1-formularios)
- [Reto 2](#reto-2)
- [Reto 3](#reto-1-formularios)
- [Reto 4](#reto-1-formularios)

---

## Reto 1: Formularios (Feb/2025)

En este [formulario](https://v0-classic-registration-form-arugu7.vercel.app) encontraremos lo siguiente: <br>

1.  Los campos con asterisco son mandatorios.
2.  Los campos sin asterisco no son mandatorios.
3.  El formulario no puede ser enviado con campos mandatorios sin llenar.
4.  El formulario puede ser enviado con campos NO mandatorios sin llenar.
5.  Los campos tienen que respetar el formato del dato que se pide (un mail tiene que tener formato email, un teléfono no puede ser letras...).
6.  Al haber un problema, un error va a ser presentado en el campo en cuestión.
7.  Si está todo bien, un mensaje de éxito se muestra.

Debemos implementar las mejores practicas para automatizar el formulario y tener cuidado con los errores escondidos ⚠️.

---

### Analisis reto 1

#### Pre-requisitos para testear:

| Atributo      | Tipo       | Obligatorio | Longitud | Regla                                                                               |
| ------------- | ---------- | ----------- | -------- | ----------------------------------------------------------------------------------- |
| Nombre        | Text field | true        | > 2      | No se permite vacio, contener letras y numeros                                      |
| Apellido      | Text field | true        | > 2      | No se permite vacio, contener letras y numeros                                      |
| Email         | Text field | true        | > 6      | No se permite vacio, debe contener un @ y una extension de dominio (.com, .co, etc) |
| Telefono      | Text field | true        | > 10     | No se permite vacio, contener solo numeros                                          |
| Direccion     | Text field | true        | > 5      | No se permite vacio, contener letras y numeros                                      |
| Ciudad        | Text field | true        | > 2      | No se permite vacio, contener letras y numeros                                      |
| Codigo postal | Text field | false       | N/A      | Contener letras y numeros                                                           |
| Pais          | Text field | false       | N/A      | Contener letras y numeros                                                           |
| Profesion     | Text field | false       | N/A      | Contener letras y numeros                                                           |
| Intereses     | Text field | true        | > 0      | Contener letras y numeros                                                           |

#### CheckList based testing: ejemplo Input field Nombre

| ID  | Summary                                                                                                                               | Status |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | Verificar que al ingresar 1 letra/numero en el campo Nombre se muestra un mensaje de error                                            |
| 2   | Verificar que al ingresar 2 letras/numeros en el campo Nombre no se muestra un mensaje de error                                       |
| 3   | Verificar que al ingresar 3 letras/numeros en el campo Nombre no se muestra un mensaje de error                                       |
| 4   | Verificar que al dejar el campo Nombre vacio se muestra un mensaje de error                                                           |
| 5   | Verificar que al ingresar caracteres especiales en el campo Nombre se muestra un mensaje de error                                     |
| 6   | Verificar que al ingresar un nombre con solo letras en el campo Nombre no se muestra un mensaje de error                              |
| 7   | Verificar que al ingresar un nombre con solo numeros en el campo Nombre no se muestra un mensaje de error                             |
| 8   | Verificar que al ingresar un nombre con combinacion de letras y numeros en el campo Nombre no se muestra un mensaje de error          |
| 9   | Verificar que al ingresar un nombre con espacios en blanco al inicio o al final en el campo Nombre se muestra un mensaje de error     |
| 10  | Verificar que al ingresar un nombre con espacios en blanco entre las letras/numeros en el campo Nombre se muestra un mensaje de error |
| 11  | Verificar que el mensaje de error en el campo Nombre se muestra cuando se ingresa un nombre valido                                    |
| 12  | Verificar que el mensaje de error en el campo Nombre desaparece al corregir el error                                                  |

---

## Reto 2:

---
