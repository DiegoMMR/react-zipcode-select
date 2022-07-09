import { IZipcode } from "../interfaces/IZipcode";

export const isNumber = (value: any): boolean => {
  // regex for digits
  const regex = /^[0-9]*$/;
  return regex.test(value);
};

export const zipCodeExist = (value: string, zipcodes: IZipcode[]): boolean => {
  return zipcodes.filter((zipcode) => zipcode.zip_code === value).length > 0;
};
