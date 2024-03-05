import { FC } from 'react'

import styles from './button.module.css'
import { IButtonProps } from './button.types'

const Button: FC<IButtonProps> = ({ children, type = 'button', ...rest }) => {
  return (
    <button type={type} className={styles.defaultButton} {...rest}>
      {children}
    </button>
  )
}

export default Button
