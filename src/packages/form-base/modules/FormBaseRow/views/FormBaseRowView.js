import React from 'react';


const FormBaseRowView = ({
  onChange,
  onInput,
  name,
  value,
  placeholder,
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
    />
  );
};


export default FormBaseRowView;
