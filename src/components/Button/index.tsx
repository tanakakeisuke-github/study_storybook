import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const style = {
    backgroundColor: backgroundColor
  }
  return (
    <button
      type="button"
      className={clsx(
        styles.storybookButton,
        styles[`storybookButton_${size}`],
        primary ? styles.storybookButton_primary : styles.storybookButton_secondary
      )}
      style={ style }
      {...props}
    >
      {label}
    </button>
  );
};
