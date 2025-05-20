
import { useToast } from './use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export const useFormValidation = () => {
  const { toast } = useToast();
  
  const validateForm = (formData: FormData): boolean => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, complete todos los campos requeridos",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };
  
  return { validateForm };
};
