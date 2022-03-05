import styled from 'styled-components';

const Button = styled.button`
  background: white;
  color: #A9A9C4;
  font-family: 'Nunito';
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #A9A9C4;;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: rgb(14, 148, 150);
    border-color: rgb(14, 148, 150);
  }
`;

export default Button;