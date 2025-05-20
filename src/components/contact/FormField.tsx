
import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  required = false,
  options = [] 
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-audrey-text mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={6}
          className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
        />
      )}
    </div>
  );
};

export default FormField;
