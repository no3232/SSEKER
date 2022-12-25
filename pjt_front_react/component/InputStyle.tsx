import styled from 'styled-components'

import inputFormTypes from '../modules/types/inputFormTypes'

const InputForm = (props: inputFormTypes) => {
  return (
    <>
    <InputFormLabel htmlFor={props.name}>{props.labelText}</InputFormLabel>
    <InputFormInput type={props.type} name={props.name} placeholder={props.placeholder}/>
    </>
    )
}

export default InputForm

const InputFormLabel = styled.label`
  display: flex;
`

const InputFormInput = styled.input`
  display: flex;
  padding: 10px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 2px #0062ff;
  }
`