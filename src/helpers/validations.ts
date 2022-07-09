import { IZipcode } from "../interfaces/IZipcode";
import { zipCodeExist } from "./index";

const messages = {
  validZipCode: "Please enter a valid zip code",
  isRequired: "This field is required",
};

export const validZipCode = (value: string, zipcodes: IZipcode[]): string => {
  const regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (regex.test(value)) {
    return "";
  } else if (!zipCodeExist(value, zipcodes)) {
    return messages.validZipCode;
  } else {
    return "";
  }
};

export const isRequired = (value: string): string => {
  if (value === "") {
    return messages.isRequired;
  } else {
    return "";
  }
};
