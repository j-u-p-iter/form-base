import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pathOr } from 'ramda';

import { formBaseRowActionCreators } from '../../actionCreators';


const FormBaseRowContainer = ({
  actions: { changeField },
  formType,
}) => {
  const onChange = (event) => {
    const { name, value } = event.target;

    changeField({ formType, name, value });
  };

  return <input onChange={onChange} />;
};

const mapStateToProps = ({ forms }, { formType, name }) => ({
  errors: pathOr([], [formType, 'errors', name], forms),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(formBaseRowActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormBaseRowContainer);
