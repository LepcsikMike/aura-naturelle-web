
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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
        description: "Por favor, completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here would be the actual form submission to a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Te responderé lo antes posible.",
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
      toast({
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
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
            Nombre <span className="text-red-500">*</span>
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex items-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
