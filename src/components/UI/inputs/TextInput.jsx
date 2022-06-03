import styled from "styled-components";

const TextInput = styled.input`
  width: 100%;
  border: 1px solid #efefef;
  outline: none;
  padding: 0.25rem 0.3rem;
  background: transparent;
  font-size: 0.9rem;
  font-family: Arial;
  color: #333;
  &:focus {
    border: 2px solid skyblue;
  }
`;

export default TextInput;
