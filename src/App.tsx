import React, { useState } from "react";
import { Select } from "./components/Select/Select";
import { zipcodes } from "./data/zipcodes";
import { IErrorMessages } from "./interfaces/default";
import { validZipCode, isRequired } from "./helpers/validations";
import { FormError } from "./components/Form/FormError";

import "./sass/Form.scss";

function App() {
  const [value, setValue] = useState<string>("");
  const [errors, setErrors] = useState<IErrorMessages>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = (): void => {
    const tempErrors: IErrorMessages = { zip_code: [] };

    const isValid = isRequired(value);
    const isZipCodeValid = validZipCode(value, zipcodes);

    if (isValid) tempErrors.zip_code.push(isValid);

    if (!isValid) {
      if (isZipCodeValid) tempErrors.zip_code.push(isZipCodeValid);
    }

    setErrors(tempErrors);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Zip Code</label>
          <Select
            options={zipcodes}
            value={value}
            setValue={setValue}
            labelProp="zip_code"
            valueProp="zip_code"
            placeholder="Select Zip Code..."
          />
          <FormError field="zip_code" errors={errors} />
        </div>
        <div className="form-item">
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
