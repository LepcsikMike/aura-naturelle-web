
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
  
  // LiveFormHQ form identifier - replace with your actual form ID/URL
  const LIVEFORM_ENDPOINT = "https://api.liveformhq.com/v1/forms/YOUR_FORM_ID_HERE";
  // If you have an API key, it would be used in the authorization header
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Unvollständige Felder",
        description: "Bitte füllen Sie alle erforderlichen Felder aus",
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
        phone: formData.phone || 'Nicht angegeben',
        subject: formData.subject || 'Allgemeine Anfrage',
        message: formData.message,
        _honey: '', // Honeypot field to prevent spam
      };
      
      // Send data to LiveFormHQ
      const response = await fetch(LIVEFORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // If you have an API key:
          // 'Authorization': 'Bearer YOUR_API_KEY_HERE',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      // Success message
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.",
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
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später noch einmal.",
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
          Nachricht <span className="text-red-500">*</span>
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
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
