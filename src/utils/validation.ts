export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validatePostalCode = (postalCode: string): boolean => {
  const postalCodeRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  return postalCodeRegex.test(postalCode);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

export interface ValidationError {
  field: string;
  message: string;
}

export const validateContactForm = (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateRequired(formData.name)) {
    errors.push({ field: 'name', message: 'Le nom est requis' });
  } else if (!validateMinLength(formData.name, 2)) {
    errors.push({ field: 'name', message: 'Le nom doit contenir au moins 2 caractères' });
  }

  if (!validateRequired(formData.email)) {
    errors.push({ field: 'email', message: 'L\'email est requis' });
  } else if (!validateEmail(formData.email)) {
    errors.push({ field: 'email', message: 'L\'email n\'est pas valide' });
  }

  if (!validateRequired(formData.phone)) {
    errors.push({ field: 'phone', message: 'Le téléphone est requis' });
  } else if (!validatePhone(formData.phone)) {
    errors.push({ field: 'phone', message: 'Le numéro de téléphone n\'est pas valide' });
  }

  if (!validateRequired(formData.message)) {
    errors.push({ field: 'message', message: 'Le message est requis' });
  } else if (!validateMinLength(formData.message, 10)) {
    errors.push({ field: 'message', message: 'Le message doit contenir au moins 10 caractères' });
  }

  return errors;
};

export const validateDevisForm = (formData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  buildingType: string;
  service: string;
  message: string;
  rgpd: boolean;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateRequired(formData.name)) {
    errors.push({ field: 'name', message: 'Le nom/entreprise est requis' });
  } else if (!validateMinLength(formData.name, 2)) {
    errors.push({ field: 'name', message: 'Le nom doit contenir au moins 2 caractères' });
  }

  if (!validateRequired(formData.email)) {
    errors.push({ field: 'email', message: 'L\'email est requis' });
  } else if (!validateEmail(formData.email)) {
    errors.push({ field: 'email', message: 'L\'email n\'est pas valide' });
  }

  if (!validateRequired(formData.phone)) {
    errors.push({ field: 'phone', message: 'Le téléphone est requis' });
  } else if (!validatePhone(formData.phone)) {
    errors.push({ field: 'phone', message: 'Le numéro de téléphone n\'est pas valide' });
  }

  if (!validateRequired(formData.address)) {
    errors.push({ field: 'address', message: 'L\'adresse est requise' });
  }

  if (!validateRequired(formData.postalCode)) {
    errors.push({ field: 'postalCode', message: 'Le code postal est requis' });
  } else if (!validatePostalCode(formData.postalCode)) {
    errors.push({ field: 'postalCode', message: 'Le code postal n\'est pas valide' });
  }

  if (!validateRequired(formData.buildingType)) {
    errors.push({ field: 'buildingType', message: 'Le type de bâtiment est requis' });
  }

  if (!validateRequired(formData.service)) {
    errors.push({ field: 'service', message: 'La prestation souhaitée est requise' });
  }

  if (!validateRequired(formData.message)) {
    errors.push({ field: 'message', message: 'La description du projet est requise' });
  } else if (!validateMinLength(formData.message, 20)) {
    errors.push({ field: 'message', message: 'La description doit contenir au moins 20 caractères' });
  }

  if (!formData.rgpd) {
    errors.push({ field: 'rgpd', message: 'Vous devez accepter la politique de confidentialité' });
  }

  return errors;
};
