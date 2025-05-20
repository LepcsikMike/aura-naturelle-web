
interface FormData {
  [key: string]: string;
}

export const submitToBasin = async (formData: FormData, formId: string): Promise<void> => {
  // Create a temporary form
  const tempForm = document.createElement('form');
  tempForm.method = 'POST';
  tempForm.action = `https://usebasin.com/f/${formId}`;
  tempForm.target = '_blank'; // Open in new tab
  
  // Add each form field
  for (const [key, value] of Object.entries(formData)) {
    if (value) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }
  }
  
  // Add honeypot field to prevent spam (Basin uses 'hp-<form-id>' format)
  const honeypotInput = document.createElement('input');
  honeypotInput.type = 'hidden';
  honeypotInput.name = `hp-${formId}`;
  honeypotInput.value = '';
  tempForm.appendChild(honeypotInput);
  
  // Add redirect URL
  const redirectInput = document.createElement('input');
  redirectInput.type = 'hidden';
  redirectInput.name = 'redirect';
  redirectInput.value = window.location.href;
  tempForm.appendChild(redirectInput);
  
  // Append form to body, submit it, and remove it
  document.body.appendChild(tempForm);
  tempForm.submit();
  document.body.removeChild(tempForm);
};
