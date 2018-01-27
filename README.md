# Validador de datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_
* **Integrantes:** _Yosseline Apcho Huaman, Tahirih Jaliri Pancca._

***

## Objetivo:

- Construir una librería (library) que responda a los requisitos del reto.

***

## Requisitos:

1. El reto debe incluir los siguientes archivos:

* README.md con descripción del módulo, instrucciones de instalación, uso y documentación del API.

* index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6 donde sea apropiado.

* index.html: Página web de la librería con ejemplo funcionando.

* package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)

* .eslintrc con configuración para linter.

* .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).

- Hacker edition (opcional):

* Si la librería está dirigida al navegador, debe adherirse al patrón UMD para poder ser usado con AMD, CommonJS y como variable global del navegador.

* Integración continua con Travis o Circle CI.

***

2. El plugin debe recibir una referencia a un elemento del DOM que contenga `<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

3. A la hora de hacer las validaciones, la librería debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.

***

## Progreso:

### Día 1:

- Se formó el equipo:

 Las integrantes fueron elegidas por el jedi master.

- Seleccionar el reto:

Por unanimidad, el reto seleccionado fue: 'Validación de tarjetas de crédito'.

***

## Snippets:
//Este es un ejemplo de snippet, qe va a ser modificado para mejorar la librería.

```
validateCardNumber('id input tarjeta') // 25467589647
expiryDate(id input fecha expiración) //  20-14-18
cardVerificationValue(id input número verificación tarjeta) // 456
nameUser(id input nombre usuario) // Tatiana Rojas
```
