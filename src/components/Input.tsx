import React from "react";

type InputProps = {
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor="input">{props.label}</label>
      <input
        id="input"
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
