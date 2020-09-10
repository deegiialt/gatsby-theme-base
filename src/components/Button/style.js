import styled from 'styled-components'

export const StyledButton = styled.button`
  color: ${ ({ theme }) => theme.colors.primary };
  padding: 20px;
  font-size: 20px;
  background: transparent;
  outline: none;
  border: ${ ({ theme }) => theme.colors.primary } 2px solid;
  cursor: pointer;
`;