// ═══════════════════════════════════════════════════════════════════════════════════════════
//  NIVEL 5 · Funciones: crear tus propias herramientas
//  Explicación: web de DWEC → Practicar → Batería 0 → Nivel 5
//  Comprobar: docker compose run --rm web npm run comprobar 5
// ═══════════════════════════════════════════════════════════════════════════════════════════
// Hasta ahora rellenabas funciones hechas. Aquí las escribes TÚ, enteras (también la primera línea).
//
//   export function nombre(dato1, dato2) {      ← los PARÁMETROS: los datos que recibe
//     return …;                                 ← lo que DEVUELVE a quien la llama
//   }
//   export const nombre = (dato1, dato2) => …;  ← lo mismo, en corto (función FLECHA): devuelve lo de detrás de =>
//
// return ≠ console.log:  console.log lo enseña en la pantalla (para ti). return se lo DA a quien llamó a la función,
// que puede guardarlo en una variable o usarlo en otra cuenta. Las pruebas miran lo que DEVUELVES.

// 🔮 PREDICCIONES
export const predicciones = {
  p1: 3, // function f(x) { return x + 1; } f(2)
  p2: "nada", // function g(x) { console.log(x); } g(2)        ← ¿qué DEVUELVE? (si crees que nada, escribe "nada")
  p3: 12, // const h = (a, b) => a * b; h(3, 4)
  p4: "Hola, anónimo", // function s(n = "anónimo") { return "Hola, " + n; } s()
};

// 👀 EJEMPLO RESUELTO ─────────────────────────────────────────────────────────────────────────
export function areaRectangulo(base, altura) {
  return base * altura;
}
export const perimetroRectangulo = (base, altura) => 2 * (base + altura); // la misma idea, con flecha

// 🔁 REPASO DEL NIVEL 4 ───────────────────────────────────────────────────────────────────────
// 🔁 5.r · Suma los números pares del 1 al n.  sumaPares(6) → 2 + 4 + 6 = 12
export function sumaPares(n) { 
  let par = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      par += i;
    }
} return par;
  throw new Error("Sin hacer");
}

// ✍️ TU TURNO ─────────────────────────────────────────────────────────────────────────────────
// Desde aquí escribes la función ENTERA debajo de su comentario: export, nombre, parámetros y return.

// ✍️ 5.1 · cuadrado(n): el número por sí mismo, como función FLECHA.  cuadrado(4) → 16 
export const cuadrado = (n) => {
  return n * n;
};

// ✍️ 5.2 · saludar(nombre): "Hola, " + nombre. Si no le pasan nombre, que use "desconocido" (parámetro por defecto).
//          saludar("Ana") → "Hola, Ana" · saludar() → "Hola, desconocido"
export function saludar(nombre = "desconocido") {
  return "Hola, " + nombre;
}
// ✍️ 5.3 · hipotenusa(a, b): la raíz cuadrada de a² + b². USA tu función cuadrado. La raíz: Math.sqrt(x)
//          hipotenusa(3, 4) → 5 
export function hipotenusa(a, b) {
  let calculo = Math.sqrt(cuadrado(a) + cuadrado(b));
  return calculo;
}

// ✍️ 5.4 · aplicarDescuento(precio, porcentaje): el precio con ese descuento.  aplicarDescuento(80, 25) → 60
//          (el 25 % de 80 es 80 * 25 / 100 = 20, y 80 - 20 = 60)
export function aplicarDescuento(precio, porcentaje) {
  let descuento = precio * porcentaje / 100;
  return precio - descuento;
}

// ✍️ 5.5 · redondear(n): n con 2 decimales como mucho.  redondear(12.3456) → 12.35 · redondear(3) → 3
//          Truco: Math.round(n * 100) / 100     (Math.round redondea al entero más cercano) 
export function redondear(n) {
  return Math.round(n * 100) / 100;
}

// ✍️ 5.6 · precioFinal(precio, porcentaje): primero el descuento, luego el 21 % de IVA, y redondeado a 2 decimales.
//          USA tus funciones aplicarDescuento y redondear.  precioFinal(80, 25) → 72.6 · precioFinal(9.99, 10) → 10.88
