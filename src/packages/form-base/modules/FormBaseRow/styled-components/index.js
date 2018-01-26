import styled from 'styled-components';

import { elementsSequence } from '../../utils';


const FormElementStyles = `
  width: 100%;
  padding: 10px;
  border: 1px solid #d5d5d5;
`;

const TextInput = styled.input.attrs({ type: 'text' })`
  ${FormElementStyles}
`;

export const FormRow = styled.div`
  ${elementsSequence('20px')}
`;

export const FormRowWithError = FormRow.extend`
  color: #f30;

  ${TextInput} {
    border-color: #f30;
  }
`;

export const ErrorContainer = styled.div`
  margin: 4px 0 0;
  font-size: 11px;
`;
