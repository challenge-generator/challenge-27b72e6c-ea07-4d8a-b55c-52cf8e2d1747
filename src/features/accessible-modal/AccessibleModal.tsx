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