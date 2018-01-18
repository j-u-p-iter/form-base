import React, { Component } from 'react';

import { FormBaseView } from '../views';


class FormBaseContainer extends Component {
  onSubmit(event) {
    event.preventDefault();
    
    console.log('onSubmitForm');
  }

  render() {
    const { Form, buttonText } = this.props;

    return (
      <FormBaseView 
        buttonText={buttonText}
        Form={Form}
        onSubmit={this.onSubmit}
      />
    );
  }
};


export default FormBaseContainer;
