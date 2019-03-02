import React, { Fragment } from 'react'
import styled from 'styled-components'
import Button from '../../Buttons'

export const Buttons = styled(Button)`
  margin-right: 10px
  border-radius: 4px
`

export const Errors = styled.div`
  color: ${({ theme }) => theme.colors.danger.dark}
  margin-bottom: 20px
  text-transform: capitalize
`

export const Wrapper = styled.div`
  label {
    font-weight: bold
  } 
`

export const GroupWrapper = styled.div`
  label {
    font-weight: bold
  }

  div {
    float: left
    width: 47%
    
    :nth-child(odd) {
      margin-right: 6%
    }
    
    div {
      width: 100%
    }
    
    div.select {
      div {
        div:nth-child(2) {
          width: 23%
        }
      }
    }
  }
`

export const SectionHeader = styled.p`
  clear: both
  font-weight: bold
  margin-top: 25px
  
  + hr {
    background-color: ${({ theme }) => theme.colors.gray.gray200}
    border: none
    height: 2px
    margin-bottom: 20px
  }
`

export const FormButtons = ({ handleReset, dirty, isSubmitting }) => (
  <Fragment>
    <Buttons color='primary' type='submit' disabled={isSubmitting}>
      Submit
    </Buttons>
    <Buttons color='danger' type='submit' onClick={handleReset} disabled={!dirty || isSubmitting}>
      Reset
    </Buttons>
  </Fragment>
)

export const getInputProps = ({ type, field, setFieldValue, setFieldTouched, ...props }) => {
  switch (type) {
    case 'select':
      return ({ ...props, ...field, onChange: setFieldValue, onBlur: setFieldTouched })
    case 'radio':
      return ({ ...props, ...field, onChange: setFieldValue })
    default:
      return ({ type, ...field, ...props })
  }
}
