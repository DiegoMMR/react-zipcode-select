import React, { Fragment } from "react";
import { IErrorMessages } from "../../interfaces/default";

interface IProps {
  field: string;
  errors: IErrorMessages;
}

const FormError = ({ field, errors }: IProps) => {
  const getErrors = (field: string): Array<string> => {
    const error = errors[field];
    if (error) {
      return error;
    }
    return [];
  };

  return (
    <Fragment>
      {getErrors(field).length > 0 && (
        <div className="errors">
          {getErrors(field).map((error, index) => (
            <div className="error" key={index}>
              {error}
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export { FormError };
