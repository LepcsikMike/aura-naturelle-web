
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // LiveFormHQ form identifier - replace with your actual form ID/URL
  const LIVEFORM_ENDPOINT = "https://api.liveformhq.com/v1/forms/YOUR_FORM_ID_HERE";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, complete todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare form data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'No especificado',
        subject: formData.subject || 'Consulta general',
        message: formData.message,
        _honey: '', // Honeypot field to prevent spam
      };
      
      // Send data to LiveFormHQ
      const response = await fetch(LIVEFORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      // Success message
      toast({
        title: "Mensaje enviado",
        description: "Gracias por su mensaje. Nos pondremos en contacto con usted lo antes posible.",
      });
      
      // Reset form
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-audrey-text mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-audrey-text mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-audrey-text mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-audrey-text mb-1">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
          >
            <option value="">Selecciona una opción</option>
            <option value="acompañamiento">Acompañamiento Energético</option>
            <option value="peluqueria">Peluquería Consciente</option>
            <option value="talleres">Talleres y Grupos</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-audrey-text mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
        ></textarea>
      </div>

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
