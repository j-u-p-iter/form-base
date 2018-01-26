import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prop, path, pathOr } from 'ramda';

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
  type,
  name,
  placeholder,
  forms,
}, { formType }) => {
  const value = path([formType, name], forms);
  const errors = pathOr([], [formType, 'errors', name], forms);
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

FormBaseRowContainer.contextTypes = {
  formType: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { name }) => ({
  forms: prop('forms', state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(formBaseRowActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormBaseRowContainer);
