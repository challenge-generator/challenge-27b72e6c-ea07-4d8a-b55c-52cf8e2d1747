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