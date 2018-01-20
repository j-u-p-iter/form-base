import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pathOr } from 'ramda';

import { FormBaseRowView } from '../views';
import { formBaseRowActionCreators } from '../../actionCreators';
import { firstSymbolToUpperCase } from '../../utils';


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

  return (
    <FormBaseRowView
      type={firstSymbolToUpperCase(type)}
      value={value}
      name={name}
      placeholder={placeholder}
      errors={errors}
      onChange={onChange}
    />
  );
};

const mapStateToProps = ({ forms }, { formType, name }) => ({
  value: forms[formType][name],
  errors: pathOr([], [formType, 'errors', name], forms),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(formBaseRowActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormBaseRowContainer);
