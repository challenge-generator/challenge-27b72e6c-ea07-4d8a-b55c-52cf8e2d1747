# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/features/accessible-form/AccessibleForm.tsx` — La pieza p1 (Implementación de roles ARIA y navegación por teclado en formularios, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/accessible-form/FormKeyboardHandler.ts` — La pieza p2 (Manejo de eventos de teclado para navegación accesible, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/accessible-modal/AccessibleModal.tsx` — La pieza p3 (Implementación de diálogos modales accesibles con ARIA y manejo de foco, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/accessible-modal/ModalFocusManager.ts` — La pieza p4 (Manejo de trampa de foco en diálogos modales, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/AccessibilityValidator.ts` — La pieza p5 (Validación automatizada de accesibilidad con pruebas, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollo frontend, Tecnología React, Advanced L2

### Brecha de conocimiento
Construye componentes interactivos accesibles: roles y atributos ARIA, navegación por teclado y manejo del foco en diálogos y menús.

### Misión / candidato
Cumplir las pautas de accesibilidad en el portal de clientes

### Reto
- Tema: Estándares ARIA (Accessible Rich Internet Applications)
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de componentes accesibles con ARIA
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Construcción de un formulario accesible — objetivo: Crear un formulario que cumpla con los estándares de accesibilidad utilizando ARIA. — entregable (NO resolver): Formulario accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.
- Fase 2: Creación de un diálogo modal accesible — objetivo: Desarrollar un diálogo modal que sea accesible y cumpla con las pautas de accesibilidad. — entregable (NO resolver): Diálogo modal accesible con roles y atributos ARIA, navegación por teclado y manejo del foco.
- Fase 3: Validación de accesibilidad con pruebas — objetivo: Validar la accesibilidad de los componentes implementados utilizando pruebas automatizadas. — entregable (NO resolver): Reporte de pruebas de accesibilidad que detalla los resultados y las correcciones realizadas, basado en las pruebas automatizadas implementadas.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { AccessibleModal } from './features/accessible-modal/AccessibleModal';
import { AccessibleForm, FormField } from './features/accessible-form/AccessibleForm';

const appRef = useRef<HTMLElement>(null);

const sampleFields: FormField[] = [
  {
    id: 'name',
    label: 'Nombre completo',
    type: 'text',
    required: true,
    placeholder: 'Ingrese su nombre completo',
    autoComplete: 'name',
    minLength: 2,
    maxLength: 100,
  },
  {
    id: 'email',
    label: 'Correo electrónico',
    type: 'email',
    required: true,
    placeholder: 'ejemplo@correo.com',
    autoComplete: 'email',
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    type: 'tel',
    required: false,
    placeholder: '+34 600 000 000',
    autoComplete: 'tel',
    pattern: '^\\+?[0-9]{9,15}$',
  },
  {
    id: 'password',
    label: 'Contraseña',
    type: 'password',
    required: true,
    placeholder: 'Mínimo 8 caracteres',
    minLength: 8,
    maxLength: 64,
    autoComplete: 'new-password',
  },
];

const handleFormSubmit = (data: Record<string, string>): void => {
  console.log('Formulario enviado:', data);
  
  const email = data['email'];
  const name = data['name'];
  
  if (!email || !name) {
    console.warn('Faltan campos requeridos');
    return;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    console.warn('Email inválido');
    return;
  }
  
  console.log('Datos válidos - enviando al servidor:', { name, email });
};

const handleModalClose = (): void => {
  console.log('Modal cerrado por el usuario');
  if (appRef.current) {
    appRef.current.focus();
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <main
      ref={appRef}
      role="application"
      aria-label="Aplicación principal de accesibilidad"
      tabIndex={-1}
      className="app-container"
    >
      <section aria-labelledby="form-title">
        <h1 id="form-title" className="sr-only">
          Formulario de registro accesible
        </h1>
        <AccessibleForm
          fields={sampleFields}
          onSubmit={handleFormSubmit}
        />
      </section>
      
      <section aria-labelledby="modal-title" className="modal-section">
        <h2 id="modal-title" className="sr-only">
          Ejemplo de modal accesible
        </h2>
        <AccessibleModal
          isOpen={false}
          onClose={handleModalClose}
          title="Accessibility Modal"
          role="dialog"
          trapFocus={true}
          closeOnOverlayClick={true}
          closeOnEscape={true}
        >
          <p>Modal content for accessibility testing</p>
          <p>
            Este modal demuestra las mejores prácticas de accesibilidad
            incluyendo manejo de foco, atributos ARIA y navegación por teclado.
          </p>
        </AccessibleModal>
      </section>
    </main>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/models/ModalProps.ts ===
/**
 * Propiedades para el componente modal accesible.
 * Define la estructura y comportamiento esperado de un modal que cumple con estándares ARIA.
 */
export interface ModalProps {
    /**
     * Indica si el modal está actualmente visible.
     * @default false
     */
    isOpen: boolean;

    /**
     * Función callback para cerrar el modal.
     * Se invoca cuando el usuario solicita cerrar el modal (ej: clic en botón de cerrar, tecla Escape).
     */
    onClose: () => void;

    /**
     * Título del modal, utilizado para el aria-label o aria-labelledby.
     * Proporciona contexto accesible sobre el propósito del modal.
     */
    title: string;

    /**
     * Contenido del modal. Puede ser cualquier nodo React válido.
     */
    children: React.ReactNode;

    /**
     * Identificador único para el modal, utilizado en atributos ARIA para asociar elementos.
     * @default `modal-${Math.random().toString(36).substr(2, 9)}`
     */
    id?: string;

    /**
     * Rol ARIA del modal. Según las pautas ARIA, debe ser 'dialog' o 'alertdialog'.
     * @default 'dialog'
     */
    role?: 'dialog' | 'alertdialog';

    /**
     * Indica si el modal debe atrapar el foco dentro de sí mismo.
     * Cuando es true, el foco no puede salir del modal hasta que se cierre.
     * @default true
     */
    trapFocus?: boolean;

    /**
     * Elemento DOM que debe recibir el foco inicial cuando el modal se abre.
     * Si no se proporciona, el foco se establece en el primer elemento enfocable del modal.
     */
    initialFocusRef?: React.RefObject<HTMLElement>;

    /**
     * Lista de reglas de accesibilidad que el modal debe cumplir.
     * Cada regla define un criterio de validación y un mensaje de error si no se cumple.
     */
    accessibilityRules?: AccessibilityRule[];

    /**
     * Callback que se invoca cuando el modal completa su animación de apertura.
     * Útil para sincronizar efectos secundarios después de que el modal esté visible.
     */
    onAfterOpen?: () => void;

    /**
     * Callback que se invoca cuando el modal comienza su animación de cierre.
     * Útil para limpiar efectos secundarios antes de que el modal desaparezca.
     */
    onAfterClose?: () => void;

    /**
     * Clase CSS adicional para personalizar el estilo del modal.
     */
    className?: string;

    /**
     * Estilo inline para el contenedor del modal.
     */
    style?: React.CSSProperties;

    /**
     * Indica si el modal debe cerrarse al hacer clic fuera de su contenido.
     * @default true
     */
    closeOnOverlayClick?: boolean;

    /**
     * Indica si el modal debe cerrarse al presionar la tecla Escape.
     * @default true
     */
    closeOnEscape?: boolean;
}

/**
 * Estructura de una regla de accesibilidad para validación automatizada.
 */
export interface AccessibilityRule {
    /**
     * Identificador único de la regla.
     */
    id: string;

    /**
     * Descripción de la regla en lenguaje natural.
     * Ejemplo: "El modal debe tener un atributo aria-labelledby asociado a su título."
     */
    description: string;

    /**
     * Selector CSS o función para identificar el elemento al que aplica la regla.
     * Puede ser un string (ej: '[role="dialog"]') o una función que recibe el elemento y retorna un booleano.
     */
    selector: string | ((element: HTMLElement) => boolean);

    /**
     * Función de validación que recibe el elemento y retorna un booleano indicando si cumple la regla.
     * @param element Elemento DOM a validar.
     * @returns true si el elemento cumple la regla, false en caso contrario.
     */
    validate: (element: HTMLElement) => boolean;

    /**
     * Mensaje de error que se muestra cuando la regla no se cumple.
     */
    errorMessage: string;

    /**
     * Prioridad de la regla (alta, media, baja).
     * @default 'media'
     */
    priority?: 'high' | 'medium' | 'low';
}

// === ARCHIVO: src/models/AccessibilityRule.ts ===
/**
 * Modelo para definir reglas de accesibilidad que deben cumplirse en componentes interactivos.
 * Estas reglas se utilizan para validar automáticamente el cumplimiento de estándares ARIA.
 */
export interface AccessibilityRule {
    /**
     * Identificador único de la regla.
     * Ejemplo: 'aria-dialog-must-have-label'
     */
    id: string;

    /**
     * Descripción clara de la regla en lenguaje natural.
     * Ejemplo: 'Un diálogo modal debe tener un atributo aria-labelledby o aria-label.'
     */
    description: string;

    /**
     * Selector CSS o función para identificar el elemento al que aplica la regla.
     * Ejemplo: '[role="dialog"]' o una función que verifica si el elemento es un modal.
     */
    selector: string | ((element: HTMLElement) => boolean);

    /**
     * Función de validación que verifica si el elemento cumple con la regla.
     * @param element Elemento DOM a validar.
     * @returns true si el elemento cumple la regla, false en caso contrario.
     */
    validate: (element: HTMLElement) => boolean;

    /**
     * Mensaje de error descriptivo que se muestra cuando la regla no se cumple.
     * Ejemplo: 'El diálogo modal debe tener un aria-label o aria-labelledby.'
     */
    errorMessage: string;

    /**
     * Prioridad de la regla (alta, media, baja).
     * Las reglas de alta prioridad son críticas para la accesibilidad.
     * @default 'medium'
     */
    priority?: 'high' | 'medium' | 'low';

    /**
     * Contexto adicional para la regla, como ejemplos o referencias a documentación.
     */
    context?: {
        /**
         * Enlace a la documentación oficial de ARIA para esta regla.
         */
        documentationUrl?: string;

        /**
         * Ejemplo de implementación correcta.
         */
        example?: string;
    };
}

/**
 * Colección predefinida de reglas de accesibilidad para modales.
 * Estas reglas cubren los requisitos básicos de accesibilidad según las pautas ARIA.
 */
export const modalAccessibilityRules: AccessibilityRule[] = [
    {
        id: 'aria-dialog-role',
        description: 'Un diálogo modal debe tener el rol ARIA "dialog" o "alertdialog".',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            const role = element.getAttribute('role');
            return role === 'dialog' || role === 'alertdialog';
        },
        errorMessage: 'El modal debe tener el rol ARIA "dialog" o "alertdialog".',
        priority: 'high',
        context: {
            documentationUrl: 'https://www.w3.org/TR/wai-aria-1.2/#dialog',
            example: '<div role="dialog" aria-labelledby="modal-title">...</div>'
        }
    },
    {
        id: 'aria-dialog-label',
        description: 'Un diálogo modal debe tener un aria-label o aria-labelledby asociado.',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            return !!element.getAttribute('aria-label') || !!element.getAttribute('aria-labelledby');
        },
        errorMessage: 'El modal debe tener un aria-label o aria-labelledby asociado a su título.',
        priority: 'high',
        context: {
            documentationUrl: 'https://www.w3.org/TR/wai-aria-1.2/#aria-label',
            example: '<div role="dialog" aria-labelledby="modal-title"><h2 id="modal-title">Título</h2></div>'
        }
    },
    {
        id: 'aria-modal-true',
        description: 'Un diálogo modal debe tener el atributo aria-modal="true".',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            return element.getAttribute('aria-modal') === 'true';
        },
        errorMessage: 'El modal debe tener el atributo aria-modal="true".',
        priority: 'high',
        context: {
            documentationUrl: 'https://www.w3.org/TR/wai-aria-1.2/#aria-modal',
            example: '<div role="dialog" aria-modal="true">...</div>'
        }
    },
    {
        id: 'focus-trap',
        description: 'El foco debe estar atrapado dentro del modal cuando está abierto.',
        selector: (element) => {
            const role = element.getAttribute('role');
            return role === 'dialog' || role === 'alertdialog';
        },
        validate: (element) => {
            // Esta validación requiere simular el comportamiento del foco en pruebas.
            // En producción, se implementa con useEffect y useRef.
            return true; // Se valida en pruebas con herramientas como jest-axe o React Testing Library
        },
        errorMessage: 'El foco debe estar atrapado dentro del modal cuando está abierto.',
        priority: 'high'
    },
    {
        id: 'escape-key-close',
        description: 'El modal debe cerrarse al presionar la tecla Escape.',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            // Esta validación se realiza en pruebas simulando eventos de teclado.
            return true; // Se valida en pruebas con user-event
        },
        errorMessage: 'El modal debe cerrarse al presionar la tecla Escape.',
        priority: 'medium'
    },
    {
        id: 'initial-focus',
        description: 'El modal debe establecer el foco en el primer elemento enfocable al abrirse.',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            // Esta validación se realiza en pruebas verificando el elemento activo.
            return true; // Se valida en pruebas con React Testing Library
        },
        errorMessage: 'El modal debe establecer el foco en el primer elemento enfocable al abrirse.',
        priority: 'medium'
    },
    {
        id: 'semantic-heading',
        description: 'El modal debe contener un encabezado semántico (h1-h6) para su título.',
        selector: '[role="dialog"], [role="alertdialog"]',
        validate: (element) => {
            return element.querySelector('h1, h2, h3, h4, h5, h6') !== null;
        },
        errorMessage: 'El modal debe contener un encabezado semántico (h1-h6) para su título.',
        priority: 'medium',
        context: {
            documentationUrl: 'https://www.w3.org/TR/WAI-WEBCONTENT/#gl-structure-presentation',
            example: '<div role="dialog"><h2 id="modal-title">Título</h2></div>'
        }
    }
];

/**
 * Colección predefinida de reglas de accesibilidad para formularios.
 * Estas reglas cubren los requisitos básicos de accesibilidad según las pautas ARIA.
 */
export const formAccessibilityRules: AccessibilityRule[] = [
    {
        id: 'form-fields-have-labels',
        description: 'Todos los campos de formulario deben tener etiquetas asociadas.',
        selector: 'input, textarea, select',
        validate: (element) => {
            const id = element.id;
            if (!id) return false;
            const label = document.querySelector(`label[for="${id}"]`);
            return !!label;
        },
        errorMessage: 'Todos los campos de formulario deben tener etiquetas asociadas.',
        priority: 'high',
        context: {
            documentationUrl: 'https://www.w3.org/TR/WCAG20-TECHS/H44.html',
            example: '<label for="name">Nombre:</label><input id="name" type="text" />'
        }
    },
    {
        id: 'aria-required-fields',
        description: 'Los campos obligatorios deben tener el atributo aria-required="true".',
        selector: 'input[required], textarea[required], select[required]',
        validate: (element) => {
            return element.getAttribute('aria-required') === 'true';
        },
        errorMessage: 'Los campos obligatorios deben tener el atributo aria-required="true".',
        priority: 'high',
        context: {
            documentationUrl: 'https://www.w3.org/TR/wai-aria-1.2/#aria-required',
            example: '<input required aria-required="true" />'
        }
    },
    {
        id: 'form-buttons-have-roles',
        description: 'Los botones de formulario deben tener roles ARIA adecuados.',
        selector: 'button, input[type="button"], input[type="submit"], input[type="reset"]',
        validate: (element) => {
            const role = element.getAttribute('role');
            if (element.tagName === 'BUTTON') return true;
            return role === 'button' || role === 'submit' || role === 'reset';
        },
        errorMessage: 'Los botones de formulario deben tener roles ARIA adecuados.',
        priority: 'medium',
        context: {
            documentationUrl: 'https://www.w3.org/TR/wai-aria-1.2/#button',
            example: '<input type="submit" role="button" />'
        }
    },
    {
        id: 'keyboard-navigation',
        description: 'El formulario debe ser navegable completamente con el teclado.',
        selector: 'form',
        validate: (element) => {
            // Esta validación se realiza en pruebas simulando la navegación con teclado.
            return true; // Se valida en pruebas con user-event
        },
        errorMessage: 'El formulario debe ser navegable completamente con el teclado.',
        priority: 'high'
    }
];

// === ARCHIVO: src/features/accessible-form/AccessibleForm.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React, { useState, useRef, useCallback } from 'react';
import { AccessibilityValidator } from '../../core/AccessibilityValidator';

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel';
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
}

interface FormError {
  fieldId: string;
  message: string;
  ariaDescribedBy: string;
}

interface AccessibleFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
}

export function AccessibleForm({ fields, onSubmit }: AccessibleFormProps): import('react').JSX.Element | null {
  throw new Error('TODO(reto): import');
}

export default AccessibleForm;

// === ARCHIVO: src/features/accessible-form/FormKeyboardHandler.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useCallback, useEffect, RefObject } from 'react';

interface UseFormKeyboardNavigationOptions {
  onEnter?: () => void;
  onEscape?: () => void;
}

export function useFormKeyboardNavigation(
  ref: RefObject<HTMLElement>,
  options?: UseFormKeyboardNavigationOptions
): any {
  throw new Error('TODO(reto): useFormKeyboardNavigation');
}

export default useFormKeyboardNavigation;

// === ARCHIVO: src/features/accessible-modal/AccessibleModal.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { ModalProps } from '../../models/ModalProps';
import { AccessibilityValidator } from '../../core/AccessibilityValidator';

export function AccessibleModal({
  isOpen,
  onClose,
  children,
  title,
  id = 'accessible-modal',
  role = 'dialog',
  trapFocus = true,
  initialFocusRef,
  accessibilityRules,
  onAfterOpen,
  onAfterClose,
  className = '',
  style,
  closeOnOverlayClick = true,
  closeOnEscape = true
}: ModalProps): import('react').JSX.Element | null {
  throw new Error('TODO(reto): import');
}

export default AccessibleModal;

// === ARCHIVO: src/features/accessible-modal/ModalFocusManager.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useEffect, useRef, useCallback, RefObject } from 'react';

interface UseModalFocusTrapOptions {
  onFocusTrap?: () => void;
  onFocusRestore?: () => void;
}

export function useModalFocusTrap(
  ref: RefObject<HTMLElement>,
  isOpen: boolean,
  options?: UseModalFocusTrapOptions
): any {
  throw new Error('TODO(reto): useModalFocusTrap');
}

export default useModalFocusTrap;

// === ARCHIVO: src/core/AccessibilityValidator.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { AccessibilityRule } from '../models/AccessibilityRule';
import { ModalProps } from '../models/ModalProps';
import { FormField } from '../features/accessible-form/AccessibleForm';

export interface AccessibilityReport {
  componentId: string;
  componentType: 'form' | 'modal' | 'custom';
  timestamp: Date;
  passed: boolean;
  issues: AccessibilityIssue[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    highPriority: number;
    mediumPriority: number;
    lowPriority: number;
  };
}

export interface AccessibilityIssue {
  ruleId: string;
  message: string;
  element?: string;
  priority: 'high' | 'medium' | 'low';
  category: 'aria' | 'keyboard' | 'focus' | 'semantic';
  suggestion?: string;
}

export interface ValidationContext {
  component: HTMLElement | null;
  rules: AccessibilityRule[];
  previousActiveElement?: HTMLElement | null;
  focusableElements?: HTMLElement[];
}

export class AccessibilityValidator {
  private static instance: AccessibilityValidator;

  private constructor() {}

  static getInstance(): AccessibilityValidator {
    throw new Error('TODO(reto): getInstance');
  }

  static validateAccessibility(
    component: HTMLElement | null,
    rules: AccessibilityRule[]
  ): AccessibilityReport {
    throw new Error('TODO(reto): validateAccessibility');
  }

  private runValidation(
    component: HTMLElement | null,
    rules: AccessibilityRule[]
  ): AccessibilityReport {
    throw new Error('TODO(reto): runValidation');
  }

  private detectComponentType(
    component: HTMLElement
  ): 'form' | 'modal' | 'custom' {
    throw new Error('TODO(reto): detectComponentType');
  }

  checkARIAAttributes(component: HTMLElement): AccessibilityIssue[] {
    throw new Error('TODO(reto): checkARIAAttributes');
  }

  checkKeyboardNavigation(component: HTMLElement): AccessibilityIssue[] {
    throw new Error('TODO(reto): checkKeyboardNavigation');
  }

  checkFocusManagement(component: HTMLElement): AccessibilityIssue[] {
    throw new Error('TODO(reto): checkFocusManagement');
  }

  private validateRule(
    component: HTMLElement,
    rule: AccessibilityRule
  ): AccessibilityIssue | null {
    throw new Error('TODO(reto): validateRule');
  }

  private createReport(
    componentId: string,
    componentType: 'form' | 'modal' | 'custom',
    issues: AccessibilityIssue[]
  ): AccessibilityReport {
    throw new Error('TODO(reto): createReport');
  }

  private createEmptyReport(
    componentId: string,
    componentType: 'form' | 'modal' | 'custom'
  ): AccessibilityReport {
    throw new Error('TODO(reto): createEmptyReport');
  }

  validateFormAccessibility(formElement: HTMLElement, fields: FormField[]): AccessibilityReport {
    throw new Error('TODO(reto): validateFormAccessibility');
  }

  validateModalAccessibility(modalElement: HTMLElement, modalProps: ModalProps): AccessibilityReport {
    throw new Error('TODO(reto): validateModalAccessibility');
  }

  generateReportSummary(reports: AccessibilityReport[]): string {
    throw new Error('TODO(reto): generateReportSummary');
  }
}

export const validateAccessibility = AccessibilityValidator.validateAccessibility;
export const validateFormAccessibility = (form: HTMLElement, fields: FormField[]) =>
  AccessibilityValidator.getInstance().validateFormAccessibility(form, fields);
export const validateModalAccessibility = (modal: HTMLElement, props: ModalProps) =>
  AccessibilityValidator.getInstance().validateModalAccessibility(modal, props);

// === ARCHIVO: src/types/Events.ts ===
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;

export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

export interface KeyboardNavigationConfig {
  onEnter?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onTab?: () => void;
  onShiftTab?: () => void;
}

export interface FocusManagementConfig {
  onFocusIn?: (element: HTMLElement) => void;
  onFocusOut?: (element: HTMLElement) => void;
  onFocusTrap?: (element: HTMLElement) => void;
  onFocusRestore?: (element: HTMLElement | null) => void;
}

export type EventCallback<T extends HTMLElement = HTMLElement> = (
  event: React.KeyboardEvent<T> | React.FocusEvent<T> | React.MouseEvent<T>
) => void;
```
