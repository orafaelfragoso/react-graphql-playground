import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  display: block;
  padding: 8px 16px;
  background: #333;
  color: #fff;
  outline: none;
  border: 1px solid #333;
  border-radius: 8px;

  &:disabled,
  &:disabled:hover {
    background-color: #e8e8e8;
    border: 1px solid #e8e8e8;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #777;
  }
`
