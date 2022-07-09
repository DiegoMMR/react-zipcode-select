import React, { useState, useRef, useEffect } from "react";
import { Options } from "./Options";
import { isNumber } from "../../helpers";
import "../../sass/Select.scss";

interface IProps {
  options: Array<any>;
  labelProp: string;
  valueProp: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

const Select = ({ options, labelProp, valueProp, placeholder, value, setValue }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const selectedValueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const events = ["click", "touchend"];
    events.forEach((event) => {
      document.addEventListener(event, handleClose);
    });

    //close when click outside
    return () =>
      events.forEach((event) => {
        document.removeEventListener(event, handleClose);
      });
  }, []);

  const handleClose = (e: any): void => {
    const isOutside = selectedValueRef.current && !selectedValueRef.current.contains(e.target);
    if (isOutside) setOpen(false);
  };

  const handleSelectClick = () => {
    setOpen(!open);
  };

  const handleInputChange = (e: any): void => {
    if (isNumber(e.target.value)) {
      setQuery(e.target.value);
      setValue(e.target.value);
    }
  };

  const displayValue = (): string => {
    if (value) return value;
    if (query.length > 0) return query;
    return "";
  };

  return (
    <div className="select" ref={selectedValueRef}>
      <div className="select-input">
        <div className="selected-value">
          <input
            type="text"
            placeholder={value ? value : placeholder}
            value={displayValue()}
            onChange={handleInputChange}
            onClick={handleSelectClick}
          />
        </div>
        <div className={`arrow ${open ? "open" : ""}`} />
      </div>
      <Options
        options={options}
        labelProp={labelProp}
        valueProp={valueProp}
        open={open}
        setOpen={setOpen}
        query={query}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export { Select };
