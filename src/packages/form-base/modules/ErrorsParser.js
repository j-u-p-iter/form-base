const camelCaseToSpaceDelimiter = string => string.replace(
  /[A-Z]/g,
  symbol => ` ${symbol}`.toLowerCase()
);

const firstLetterToLowerCase = string => string.replace(
  /^[A-Z]/,
  symbol => symbol.toLowerCase()
);


class ErrorsParser {

  _ERRORS_IDS = ['duplicateKey'];

  _parseErrorAttributeName(error) {
    return Object.keys(this.schema[error.modelName + 'Schema']).find((attributeName) => {
      const regExp = new RegExp('\\$' + attributeName);

      return regExp.test(error.message);
    });
  }

  _findErrorID(errorMessage) {
    return this._ERRORS_IDS.find(errorID => {
      const regExp = new RegExp(camelCaseToSpaceDelimiter(errorID));

      return regExp.test(errorMessage);
    });
  }

  _getErrorType(error, errorAttributeName) {
    return errorAttributeName ? 'validation' : firstLetterToLowerCase(error.message);
  }

  _getDataToLocalize(errorAttributeName) {
    return errorAttributeName ? { errorAttributeName } : null;
  }

  _getPathToLocale(error, errorAttributeName) {
    const errorID = this._findErrorID(error.message),
          commonPart = `forms.errors.${this._getErrorType(error, errorAttributeName)}.${error.modelName}`;

    return errorID ? `${commonPart}.${errorID}` : commonPart;
  }

  _parseErrorMessage(error, errorAttributeName) {
    return this.i18n.t(
      this._getPathToLocale(error, errorAttributeName),
      this._getDataToLocalize(errorAttributeName)
    );
  }

  constructor(props) {
    const { i18n, schema } = props;

    this.i18n = i18n;
    this.schema = schema;
  }

  parse(errors) {
    return errors.reduce((resultErrors, currentError) => {
      if (!currentError.errorAttribute) {
        const errorAttributeName = this._parseErrorAttributeName(currentError);

        if (currentError.baseType) {
          if (!resultErrors.base) { resultErrors.base = []; }

          resultErrors.base.push(this._parseErrorMessage(currentError, errorAttributeName));
        } else {
          if (!resultErrors[errorAttributeName]) { resultErrors[errorAttributeName] = []; }

          resultErrors[errorAttributeName].push(this._parseErrorMessage(currentError, errorAttributeName));
        }
      } else {
        if (!resultErrors[currentError.errorAttribute]) {
          resultErrors[currentError.errorAttribute] = [];
        }

        resultErrors[currentError.errorAttribute].push(currentError.message);
      }

      return resultErrors;
    }, {});
  }
}


export default ErrorsParser;
