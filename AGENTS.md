# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de componentes accesibles con ARIA**.

| | |
|---|---|
| Tema | Estándares ARIA (Accessible Rich Internet Applications) |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón contenedor/presentacional con componentes reutilizables |
| Tiempo estimado | 10 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 18.3.1
- react-dom 18.3.1
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Construcción de un formulario accesible**: Formulario accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.
- **Fase 2 — Creación de un diálogo modal accesible**: Diálogo modal accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.
- **Fase 3 — Validación de accesibilidad con pruebas**: Reporte de pruebas de accesibilidad que detalla los resultados y las correcciones realizadas, basado en las pruebas automatizadas implementadas.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/features/accessible-form/AccessibleForm.tsx` — La pieza p1 (Implementación de roles ARIA y navegación por teclado en formularios, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/accessible-form/FormKeyboardHandler.ts` — La pieza p2 (Manejo de eventos de teclado para navegación accesible, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/accessible-modal/AccessibleModal.tsx` — La pieza p3 (Implementación de diálogos modales accesibles con ARIA y manejo de foco, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/accessible-modal/ModalFocusManager.ts` — La pieza p4 (Manejo de trampa de foco en diálogos modales, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/AccessibilityValidator.ts` — La pieza p5 (Validación automatizada de accesibilidad con pruebas, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Construcción de un formulario accesible | Implementación de roles ARIA y navegación por teclado en formularios | `src/features/accessible-form/AccessibleForm.tsx:AccessibleForm` | El formulario debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco adecuadamente en campos y botones; Debe validar entradas y mostrar errores accesibles | — | — |
| f1 — Construcción de un formulario accesible | Manejo de eventos de teclado para navegación accesible | `src/features/accessible-form/FormKeyboardHandler.ts:FormKeyboardHandler` | El formulario debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco adecuadamente en campos y botones; Debe validar entradas y mostrar errores accesibles | — | — |
| f2 — Creación de un diálogo modal accesible | Implementación de diálogos modales accesibles con ARIA y manejo de foco | `src/features/accessible-modal/AccessibleModal.tsx:AccessibleModal` | El diálogo modal debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco al abrirse y cerrarse; Debe atrapar el foco dentro del modal; Debe cerrarse con la tecla Escape; Debe manejar errores de apertura/cerrado | — | — |
| f2 — Creación de un diálogo modal accesible | Manejo de trampa de foco en diálogos modales | `src/features/accessible-modal/ModalFocusManager.ts:ModalFocusManager` | El diálogo modal debe tener roles y atributos ARIA correctamente aplicados; Debe ser navegable completamente con teclado; Debe manejar el foco al abrirse y cerrarse; Debe atrapar el foco dentro del modal; Debe cerrarse con la tecla Escape; Debe manejar errores de apertura/cerrado | — | — |
| f3 — Validación de accesibilidad con pruebas | Validación automatizada de accesibilidad con pruebas | `src/core/AccessibilityValidator.ts:AccessibilityValidator` | Las pruebas automatizadas deben cubrir todos los atributos ARIA y comportamientos de teclado implementados; Debe incluir casos de error y borde; Debe generar un reporte con los resultados y correcciones | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Conoce HTML semántico pero no ha aplicado ARIA en componentes dinámicos | chequeo estatico (code): exige `role=`, `aria-`, `tabIndex=`, `useRef`; prohibe `div`, `span` | Restriccion no verificada en chequeo estatico (code): exige `role=`, `aria-`, `tabIndex=`, `useRef`; prohibe `div`, `span` |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (14)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/models/ModalProps.ts`
- `src/models/AccessibilityRule.ts`
- `src/features/accessible-form/AccessibleForm.tsx`
- `src/features/accessible-form/FormKeyboardHandler.ts`
- `src/features/accessible-modal/AccessibleModal.tsx`
- `src/features/accessible-modal/ModalFocusManager.ts`
- `src/core/AccessibilityValidator.ts`
- `src/types/Events.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/features/accessible-form` (presente)
- `src/features/accessible-modal` (presente)
- `src/core` (presente)
- `src/models` (presente)
- `src/utils` (ausente)
- `src/__tests__` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con componentes reutilizables**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollo frontend, Tecnología React, Advanced L2
- Brecha que el reto ataca: Construye componentes interactivos accesibles: roles y atributos ARIA, navegación por teclado y manejo del foco en diálogos y menús.
- Mision: Cumplir las pautas de accesibilidad en el portal de clientes

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
