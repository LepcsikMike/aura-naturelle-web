
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormField from './contact/FormField';
import { submitToBasin } from '@/utils/formSubmission';
import { useFormValidation, ContactFormData, contactFormSchema } from '@/hooks/useFormValidation';

const ContactForm = () => {
  const { toast } = useToast();
  const { showValidationErrors } = useFormValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Basin form identifier
  const BASIN_FORM_ID = "cfe60c5493e3";
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Convert the form data to plain object to ensure [key: string]: string format
      const formDataObject: { [key: string]: string } = {};
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject[key] = String(value || '');
      });
      
      // Submit form to Basin
      await submitToBasin(formDataObject, BASIN_FORM_ID);
      
      toast({
        title: "Formulario enviado",
        description: "Se ha abierto una nueva pestaña para completar el envío",
      });
      
      // Reset form data
      form.reset();
      
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
    { value: "default", label: "Selecciona una opción" },
    { value: "acompañamiento", label: "Acompañamiento Energético" },
    { value: "peluqueria", label: "Peluquería Consciente" },
    { value: "talleres", label: "Talleres y Grupos" },
    { value: "otro", label: "Otro" }
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit, showValidationErrors)} className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            form={form}
            label="Nombre"
            name="name"
            type="text"
            required
          />
          <FormField
            form={form}
            label="Email"
            name="email"
            type="email"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            form={form}
            label="Teléfono"
            name="phone"
            type="tel"
          />
          <FormField
            form={form}
            label="Asunto"
            name="subject"
            type="select"
            options={subjectOptions}
          />
        </div>

        <FormField
          form={form}
          label="Mensaje"
          name="message"
          type="textarea"
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
    </Form>
  );
};

export default ContactForm;
