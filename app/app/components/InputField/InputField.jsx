"use client";
import { useState, useEffect } from "react";
import styles from "./InputField.module.scss";
import Image from "next/image";
import EyeIcon from "../../public/icon-eye.svg";

export default function InputField({
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
  ...otherProps
}) {
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
    <div className={`${styles["input-field"]} ${classes}`}>
      {label && <label htmlFor={id}>{label}</label>}
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
