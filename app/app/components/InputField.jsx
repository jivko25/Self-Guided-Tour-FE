'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './InputField.module.scss';
import Image from 'next/image';
import EyeIcon from '../public/icon-eye.svg';
import AlertIcon from '../public/alert-circle-outline.svg';

export default function InputField({
  id,
  className,
  label,
  placeholder,
  name,
  type = 'text',
  onChange,
  error,
  hint,
  required,
  disabled,
  readOnly,
}) {
  const [value, setValue] = useState('');
  const [classN, setClassN] = useState('');
  const [inputErr, setInputErr] = useState('');
  const [inputType, setInputType] = useState(type);
  const [eyeIconClass, setEyeIconClass] = useState('eye-icon');

  useEffect(() => {
    if (type === 'password' && error) {
      setClassN('alert-icon-5');
    } else {
      setClassN('alert-icon-4');
    }

    if (error) {
      setInputErr('error');
    } else {
      setInputErr('');
    }
  }, [type, error, setClassN, setInputErr]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleShowPassword = () => {
    if (inputType === 'password') {
        setInputType('text');
        setEyeIconClass('eye-icon-shown');
    } else {
        setInputType('password');
        setEyeIconClass('eye-icon');
    }
  }
  return (
    <div className={`${styles['input-field']} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles['input-wrapper']}>
        <input
          className={styles[inputErr]}
          id={id}
          type={inputType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
        />
        {type === 'password' && (
          <a
            className={styles[eyeIconClass]}
            onClick={handleShowPassword}
          >
            <Image src={EyeIcon} width={32} height={32} alt="Eye icon" />
          </a>
        )}
        {error && (
          <div className={styles[classN]}>
            <Image src={AlertIcon} width={24} height={24} alt="Alert icon" />
          </div>
        )}
      </div>
      {error && <p className={styles['error-msg']}>{error}</p>}
      {hint && <p className={styles['hint-msg']}>{hint}</p>}
    </div>
  );
}
