import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 20px;
  span {
    font-weight: bold
  }
`
const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  
  div {
    float: left
  }
  
  input {
    margin-right: 10px
  }
  
  label {
    font-weight: 400 !important
  }
`

const RadioWrapper = styled.div`
  margin-right: 20px
`

export default class Radio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: `${props.value}`
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name, onChange, booleanType } = this.props
    const value = event.target.value
    const radioValue = booleanType ? JSON.parse(value) : value
    this.setState({ value })
    onChange(name, radioValue)
  }

  render () {
    const { name, data, label: header } = this.props
    const { value: target } = this.state

    return (
      <Container>
        <span>{header}</span>
        <Wrapper>
          <fieldset>
            {data.map(({ label, id, value }) => (
              <RadioWrapper key={`${name}${id}`}>
                <input
                  id={id}
                  name={name}
                  type='radio'
                  value={value}
                  defaultChecked={target === value}
                  onChange={this.handleChange}
                />
                <label htmlFor={id}>{label}</label>
              </RadioWrapper>
            ))}
          </fieldset>
        </Wrapper>
      </Container>
    )
  }
}
