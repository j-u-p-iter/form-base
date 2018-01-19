import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import invariant from 'invariant';
import { has, path } from 'ramda';
import { SchemaValidator } from '@j.u.p.iter/validator';

import { FormBaseView } from '../views';
import { formBaseActionCreators } from '../../actionCreators';


class FormBaseContainer extends Component {
  _config = {}

  _validator = new SchemaValidator({
    [this._config.modelName]: this._config.schema
  }, 'ru');

  componentDidMount() {
    const { type, data, formActions: { initForm } } = this.props;

    initForm(type, data);
  }

  onSubmit = event => {
    event.preventDefault();

    const { formActions: { submitForm }, type } = this.props;

    submitForm(type);
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

const mapStateToProps = (state, { type }) => {
  invariant(
    has('forms', state),
    'Your store should contain \'forms\' field state',
  );

  invariant(
    type,
    'Type should be provided',
  );

  invariant(
    path(['forms', type], state),
    'Type should be correct',
  );

  return {
    formData: path(['forms', type], state),
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
