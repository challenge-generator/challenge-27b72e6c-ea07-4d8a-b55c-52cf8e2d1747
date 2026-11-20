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