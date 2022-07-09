import React from "react";

interface IProps {
  options: Array<any>;
  labelProp: string;
  valueProp: string;

  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  value: string;
  setValue: (value: string) => void;
}

const Options = ({ options, labelProp, valueProp, open, setOpen, query, value, setValue }: IProps) => {
  const handleOptionClick = (valueSelected: string): void => {
    setValue(valueSelected);
    setOpen(false);
  };

  const filter = (options: Array<any>): Array<any> => {
    return options.filter((option) => option[labelProp].toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className={`options ${open ? "open" : ""}`}>
      {filter(options).map((option, index) => (
        <div
          key={index}
          className={`option ${value === option[valueProp] ? "selected" : ""}`}
          onClick={() => handleOptionClick(option[valueProp])}
        >
          {option[labelProp]}
        </div>
      ))}
    </div>
  );
};

export { Options };
