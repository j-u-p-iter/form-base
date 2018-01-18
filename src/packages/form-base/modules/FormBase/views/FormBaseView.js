import React from 'react';


const FormBaseView = ({ onSubmit, buttonText, Form }) => (
  <Form 
    onSubmit={onSubmit} 
    buttonText={buttonText}
  />
);


export default FormBaseView;
