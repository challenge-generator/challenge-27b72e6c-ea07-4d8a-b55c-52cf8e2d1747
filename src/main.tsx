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