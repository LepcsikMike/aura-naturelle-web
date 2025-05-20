
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import FormField from './contact/FormField';
import { submitToBasin } from '@/utils/formSubmission';
import { useFormValidation } from '@/hooks/useFormValidation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const { validateForm } = useFormValidation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Basin form identifier
  const BASIN_FORM_ID = "cfe60c5493e3";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm(formData)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit form to Basin
      await submitToBasin(formData, BASIN_FORM_ID);
      
      toast({
        title: "Formulario enviado",
        description: "Se ha abierto una nueva pestaña para completar el envío",
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    { value: "", label: "Selecciona una opción" },
    { value: "acompañamiento", label: "Acompañamiento Energético" },
    { value: "peluqueria", label: "Peluquería Consciente" },
    { value: "talleres", label: "Talleres y Grupos" },
    { value: "otro", label: "Otro" }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Teléfono"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <FormField
          label="Asunto"
          name="subject"
          type="select"
          value={formData.subject}
          onChange={handleChange}
          options={subjectOptions}
        />
      </div>

      <FormField
        label="Mensaje"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-audrey-green hover:bg-audrey-green-dark text-white"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
