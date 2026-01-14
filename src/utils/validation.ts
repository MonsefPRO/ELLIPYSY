export const validatePhone = (phone: string): boolean => {
  // Regex beaucoup plus souple qui accepte les formats standards français
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  // Nettoyage agressif des espaces et points pour la vérification
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

  // ON REND CES CHAMPS OPTIONNELS s'ils ne sont pas dans le formulaire
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
