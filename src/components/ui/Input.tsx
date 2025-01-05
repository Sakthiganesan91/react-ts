import React from "react";

interface InputProps {
  type: string;
  label: string;
  value: string | number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, label, value, placeholder, onChange }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
