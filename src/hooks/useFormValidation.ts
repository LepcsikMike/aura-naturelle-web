
import { useToast } from './use-toast';
import { z } from 'zod';

// Define the validation schema using Zod
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "El mensaje es obligatorio" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useFormValidation = () => {
  const { toast } = useToast();
  
  const showValidationErrors = (errors: Record<string, { message: string }>) => {
    const firstError = Object.values(errors)[0];
    
    toast({
      title: "Campos incompletos",
      description: firstError?.message || "Por favor, complete todos los campos requeridos",
      variant: "destructive",
    });
  };
  
  return { contactFormSchema, showValidationErrors };
};
