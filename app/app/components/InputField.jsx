'use client';
import { useState, useEffect } from 'react';
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
  value = '',
  onChange,
  error,
  hint,
  required,
  disabled,
  readOnly,
  ...otherProps
}) {
  const [inputValue, setInputValue] = useState(value);
  const [inputErr, setInputErr] = useState('');

  useEffect(() => {
    if (error) {
      setInputErr('error');
    } else {
      setInputErr('');
    }

  }, [type, error, setInputErr]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleShowPassword = () => {
    if (type === 'password') {
        setInputType('text');
    } else {
        setInputType('password');
    }
  }
  return (
    <div className={`${styles['input-field']} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles['input-wrapper']}>
        <input
          className={styles[inputErr]}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          {...otherProps}
        />
        {(type === 'password' && !error) && (
          <a
            className={styles['eye-icon']}
            onClick={handleShowPassword}
          >
            <Image src={EyeIcon} width={32} height={32} alt="Eye icon" />
          </a>
        )}
        {error && (
          <div className={styles['alert-icon-4']}>
            <Image src={AlertIcon} width={24} height={24} alt="Alert icon" />
          </div>
        )}
      </div>
      {hint && <p className={styles['hint-msg']}>{hint}</p>}
      {error && <p className={styles['error-msg']}>{error}</p>}
    </div>
  );
}
