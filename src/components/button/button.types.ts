export interface IButtonProps {
  onClick: (e?: React.BaseSyntheticEvent | undefined) => void
  children?: React.ReactNode
  disabled?: boolean
  type: 'reset' | 'submit' | 'button'
}
