import React from 'react';
import { map } from 'ramda';

import { ErrorContainer } from '../styled-components';


const FormBaseRowView = ({
  Controller,
  Row,
  onChange,
  name,
  value,
  placeholder,
  errors,
}) => {
  return (
    <Row>
      <Controller
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {
        map((error) => (
          <ErrorContainer key={error}>
            {error}
          </ErrorContainer>
        ), errors)
      }
    </Row>
  );
};


export default FormBaseRowView;
