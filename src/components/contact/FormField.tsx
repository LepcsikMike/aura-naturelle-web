
import React from 'react';
import { FormControl, FormField as ShadcnFormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormData } from '@/hooks/useFormValidation';

interface FormFieldProps {
  form: UseFormReturn<ContactFormData>;
  name: keyof ContactFormData;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ 
  form, 
  name, 
  label, 
  type, 
  required = false,
  options = [] 
}) => {
  return (
    <ShadcnFormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-audrey-text">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea
                {...field}
                rows={6}
                className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
              />
            ) : type === "select" ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition">
                  <SelectValue placeholder={options[0]?.label || "Seleccionar"} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type={type}
                {...field}
                className="w-full px-4 py-2 border border-audrey-earth-light rounded-md focus:ring-2 focus:ring-audrey-green focus:border-transparent outline-none transition"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
