import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import invariant from 'invariant';
import { has, path, prop } from 'ramda';
import { SchemaValidator } from '@j.u.p.iter/validator';

import { FormBaseView } from '../views';
import { formBaseActionCreators } from '../../actionCreators';


class FormBaseContainer extends Component {
  _config = this.props.config;

  _validator = new SchemaValidator({
    [this._config.modelName]: this._config.schema
  }, 'ru');

  _validateForm(data) {
    return this._validator.validate(
      this._config.modelName,
      {
        values: data,
        fieldsToExclude: this._config.attributesToExclude
      }
    );
  }

  _onProcessWithSuccess() {

  }

  _processErrors(errors) {

  }

  _processFormData() {
    const { formData, formActions: { submitForm }, type } = this.props;
    const errors = this._validateForm(formData);

    errors ? this._processErrors(errors) : submitForm(type);
  }

  getChildContext = () => {
    return {
      formType: prop('formType', this._config),
    };
  }

  componentDidMount() {
    const { type, formData, formActions: { initForm } } = this.props;

    initForm(type, formData);
  }

  onSubmit = event => {
    event.preventDefault();

    this._processFormData();
  }

  render() {
    const { Form, buttonText, title } = this.props;

    return (
      <FormBaseView
        Form={Form}
        onSubmit={this.onSubmit}
      />
    );
  }
};

FormBaseContainer.childContextTypes = {
  formType: PropTypes.string.isRequired,
};


const mapStateToProps = (state, { config }) => {
  const { formType } = config;

  invariant(
    has('forms', state),
    'Your store should contain \'forms\' field state',
  );

  invariant(
    formType,
    'Type should be provided',
  );

  invariant(
    path(['forms', formType], state),
    'Type should be correct',
  );

  return {
    formData: path(['forms', formType], state),
  };
};

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(formBaseActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(FormBaseContainer);


// 1. Redux store state should contain forms field.
//    This field should contain all forms types with data according to these forms.
//
//    So, it would be great to check store state presence on before form init to inform user,
//    that forms field is required.
//
// 2. Write tests in parallel with writing base code
