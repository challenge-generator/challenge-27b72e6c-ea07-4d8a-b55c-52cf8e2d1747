# Implementación de componentes accesibles con ARIA

El portal de clientes requiere mejoras en accesibilidad para cumplir con las pautas de accesibilidad. Debes construir y validar componentes interactivos accesibles utilizando roles y atributos ARIA, navegación por teclado y manejo del foco en diálogos y menús.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Estándares ARIA (Accessible Rich Internet Applications) |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** 5.7

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Construcción de un formulario accesible

**Objetivo:** Crear un formulario que cumpla con los estándares de accesibilidad utilizando ARIA.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Identifica los elementos del formulario que requieren roles y atributos ARIA.
- Implementa la navegación por teclado en el formulario.
- Asegura que el foco se maneje correctamente al interactuar con el formulario.

**Entregable:** Formulario accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa la documentación de ARIA para comprender los roles y atributos disponibles.
- Considera los casos de uso para personas con discapacidades visuales.

</details>

### Fase 2: Creación de un diálogo modal accesible

**Objetivo:** Desarrollar un diálogo modal que sea accesible y cumpla con las pautas de accesibilidad.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Aplica roles y atributos ARIA al diálogo modal.
- Implementa la navegación por teclado y el manejo del foco en el diálogo modal.
- Asegura que el diálogo modal sea operable sin un ratón.

**Entregable:** Diálogo modal accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga las mejores prácticas para hacer diálogos modales accesibles.
- Considera la experiencia del usuario al cerrar y abrir el diálogo modal.

</details>

### Fase 3: Validación de accesibilidad con pruebas

**Objetivo:** Validar la accesibilidad de los componentes implementados utilizando pruebas automatizadas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar pruebas automatizadas para validar los atributos ARIA y el comportamiento del teclado en el formulario y el diálogo modal.
- Incluir casos de error y borde en las pruebas (ej: foco perdido, atributos ARIA faltantes, navegación con teclado rota).
- Generar un reporte con los resultados de las pruebas y las correcciones aplicadas.

**Entregable:** Reporte de pruebas de accesibilidad que detalla los resultados y las correcciones realizadas, basado en las pruebas automatizadas implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Explora herramientas de accesibilidad como Axe o Lighthouse.
- Revisa las pautas de accesibilidad del WCAG para asegurarte de que tus pruebas cubran todos los aspectos importantes.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los estándares ARIA y por qué son importantes para la accesibilidad?
- **paraQueSirve**: ¿Cómo se utilizan los roles y atributos ARIA en la construcción de componentes accesibles?
- **comoSeUsa**: ¿Cuáles son las mejores prácticas para implementar la navegación por teclado y el manejo del foco en componentes accesibles?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar componentes accesibles y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño debes tomar al implementar componentes accesibles y cómo afectan la experiencia del usuario?

## Criterios de Evaluacion

- Implementación de un formulario accesible con roles y atributos ARIA.
- Implementación de un diálogo modal accesible con roles y atributos ARIA.
- Validación de la accesibilidad de los componentes implementados utilizando pruebas automatizadas.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Construcción de un formulario accesible | Implementación de roles ARIA y navegación por teclado en formularios | `src/features/accessible-form/AccessibleForm.tsx:AccessibleForm` | El formulario debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco adecuadamente en campos y botones; Debe validar entradas y mostrar errores accesibles | — | — |
| f1 — Construcción de un formulario accesible | Manejo de eventos de teclado para navegación accesible | `src/features/accessible-form/FormKeyboardHandler.ts:FormKeyboardHandler` | El formulario debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco adecuadamente en campos y botones; Debe validar entradas y mostrar errores accesibles | — | — |
| f2 — Creación de un diálogo modal accesible | Implementación de diálogos modales accesibles con ARIA y manejo de foco | `src/features/accessible-modal/AccessibleModal.tsx:AccessibleModal` | El diálogo modal debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco al abrirse y cerrarse; Debe atrapar el foco dentro del modal; Debe cerrarse con la tecla Escape; Debe manejar errores de apertura/cerrado | — | — |
| f2 — Creación de un diálogo modal accesible | Manejo de trampa de foco en diálogos modales | `src/features/accessible-modal/ModalFocusManager.ts:ModalFocusManager` | El diálogo modal debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco al abrirse y cerrarse; Debe atrapar el foco dentro del modal; Debe cerrarse con la tecla Escape; Debe manejar errores de apertura/cerrado | — | — |
| f3 — Validación de accesibilidad con pruebas | Validación automatizada de accesibilidad con pruebas | `src/core/AccessibilityValidator.ts:AccessibilityValidator` | Las pruebas automatizadas deben cubrir todos los atributos ARIA y comportamientos de teclado implementados; Debe incluir casos de error y borde; Debe generar un reporte con los resultados y correcciones | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Conoce HTML semántico pero no ha aplicado ARIA en componentes dinámicos | chequeo estatico (code): exige `role=`, `aria-`, `tabIndex=`, `useRef`; prohibe `div`, `span` | Restriccion no verificada en chequeo estatico (code): exige `role=`, `aria-`, `tabIndex=`, `useRef`; prohibe `div`, `span` |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
