import React from 'react'
import { StyledButton } from './style';

const Button = ({ children, onClickAction }) => (
  <StyledButton onClick={ onClickAction }>{ children }</StyledButton>
)

export default Button
