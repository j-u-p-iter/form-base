import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prop, pathOr } from 'ramda';

import { FormBaseRowView } from '../views';
import { formBaseRowActionCreators } from '../../actionCreators';
import { firstSymbolToUpperCase } from '../../utils';
import { FormRow, FormRowWithError } from '../styled-components';


const getController = (type) => {
  const controllerName = firstSymbolToUpperCase(type);

  return require(`../views/elements/${controllerName}`).default;
}

const FormBaseRowContainer = ({
  actions: { changeField },
  formType,
  type,
  value,
  name,
  placeholder,
  errors,
}) => {
  const onChange = ({ target: { name, value } }) => {
    changeField({ formType, name, value });
  };

  const Row = prop('length', errors) ? FormRowWithError : FormRow;

  return (
    <FormBaseRowView
      Controller={getController(type)}
      Row={Row}
      value={value}
      name={name}
      placeholder={placeholder}
      errors={errors}
      onChange={onChange}
    />
  );
};

FormBaseRowContainer.defaultProps = {
  type: 'textInput',
};

const mapStateToProps = ({ forms }, { formType, name }) => ({
  value: forms[formType][name],
  errors: pathOr([], [formType, 'errors', name], forms),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(formBaseRowActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormBaseRowContainer);
