import React from "react";

type InputProps = {
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input id="input" type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
