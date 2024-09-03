"use client";
import styles from "./InputField.module.scss";
import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import EyeIcon from "../../public/icon-eye.svg";
import HelpIconInfo from "../CreateTourSteps/Step1/Step1Components/HelpIcon";

const InputField = forwardRef(
  (
    {
      id,
      classes = "",
      label,
      placeholder,
      name,
      type = "text",
      value,
      onChange,
      error,
      hint,
      required,
      disabled,
      readOnly,
      createTour,
      content,
      ...otherProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [inputErr, setInputErr] = useState("");
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
      if (value) {
        setInputValue(value);
      }

      if (error) {
        setInputErr("error");
      } else {
        setInputErr("");
      }
    }, [type, error, setInputErr, value]);

    const handleChange = (e) => {
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const handleShowPassword = () => {
      if (inputType === "password") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    };

    return (
      <div
        className={`${
          createTour ? styles["tour-input-field"] : styles["input-field"]
        } ${classes}`}
      >
        {label && (
          <label htmlFor={id}>
            {label}
            {createTour && (
              <HelpIconInfo
                styles={styles["help-icon"]}
                id={id}
                content={content}
              />
            )}
          </label>
        )}
        <div className={styles["input-wrapper"]}>
          <input
            className={styles[inputErr]}
            id={id}
            type={inputType}
            name={name}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}
            {...otherProps}
          />
          {type === "password" && !error && (
            <a className={styles["eye-icon"]} onClick={handleShowPassword}>
              <Image src={EyeIcon} width={32} height={32} alt="Eye icon" />
            </a>
          )}
        </div>
        {hint && <p className={styles["hint-msg"]}>{hint}</p>}
        {error && <p className={styles["error-msg"]}>{error}</p>}
      </div>
    );
  }
);
export default InputField;
