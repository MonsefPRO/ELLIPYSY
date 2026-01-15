// Fonction de nettoyage des entrées (requise par useSecureForm)
export const sanitizeInput = (input: string): string => {
  return input.trim();
};

// Vérifie si un champ est rempli
export const validateRequired = (value: any): boolean => {
  return value !== undefined && value !== null && value.toString().trim() !== '';
};

// Vérifie le format de l'email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export interface ValidationError {
  field: string;
  message: string;
}

export const validatePhone = (phone: string): boolean => {
  // Regex souple pour les formats français
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  // Nettoyage pour la vérification de longueur
  const cleaned = phone.replace(/[\s.-]/g, '');
  return cleaned.length === 10 || (cleaned.startsWith('33') && cleaned.length === 11);
};

export const validateDevisForm = (formData: any): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateRequired(formData.name)) {
    errors.push({ field: 'name', message: 'Nom requis' });
  }

  if (!validateEmail(formData.email)) {
    errors.push({ field: 'email', message: 'Email invalide' });
  }

  if (!validatePhone(formData.phone)) {
    errors.push({ field: 'phone', message: 'Téléphone invalide' });
  }

  // Champs optionnels
  if (formData.address && !validateRequired(formData.address)) {
    errors.push({ field: 'address', message: 'Adresse requise' });
  }

  if (!validateRequired(formData.message) || formData.message.length < 10) {
    errors.push({ field: 'message', message: 'Message trop court' });
  }

  if (!formData.rgpd) {
    errors.push({ field: 'rgpd', message: 'RGPD requis' });
  }

  return errors;
};
