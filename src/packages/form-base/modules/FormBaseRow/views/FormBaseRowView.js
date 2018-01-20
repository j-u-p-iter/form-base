import React from 'react';


const FormBaseRowView = ({
  Controller,
  Row,
  onChange,
  name,
  value,
  placeholder,
}) => {
  return (
    <Row>
      <Controller
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Row>
  );
};


export default FormBaseRowView;
