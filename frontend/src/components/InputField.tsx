import React, { ChangeEvent } from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text', required }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
