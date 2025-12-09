import React from 'react';
import { SuperButtonProps } from './SuperButton.types';
import './SuperButton.scss';

export const SuperButton: React.FC<SuperButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled,
  className = '',
  ...rest
}) => {
  const buttonClasses = [
    'super-button',
    `super-button--${variant}`,
    `super-button--${size}`,
    fullWidth ? 'super-button--full-width' : '',
    isLoading ? 'super-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <span className="super-button__loader" />}
      <span className="super-button__content">{children}</span>
    </button>
  );
};
