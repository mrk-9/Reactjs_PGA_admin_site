import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import Select from 'react-select'
import { Wrapper, Display } from './helper'

export class CustomSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value,
      options: [],
      loading: true,
      error: null,
      defaultOption: null
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async getOptions ({ client, query, dataKey }) {
    const { data = {} } = await client.query({ query })
    const { edges = [] } = data[dataKey] || {}
    return edges.map(({ node: { id, name } = {} }) => ({ label: name, value: id }))
  }

  async componentDidMount () {
    const { value, query, client, dataKey, options: passedOptions } = this.props
    try {
      const options = passedOptions || await this.getOptions({ query, client, dataKey })
      const defaultOption = options.find(({ value: val }) => val === value)
      this.setState({ options, loading: false, defaultOption })
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }

  handleChange (value) {
    const { name, onChange } = this.props
    const { value: id } = value
    this.setState({ value })
    onChange(name, id)
  }

  handleBlur () {
    const { name, onBlur } = this.props
    onBlur(name)
  }

  render () {
    const { label, id, placeholder, hasStyle } = this.props
    const { defaultOption, options, loading, error } = this.state

    if (error) {
      return <Display label={label} msg='Options failed to load' />
    }

    if (loading) {
      return <Display label={label} msg='Loading options...' />
    }

    return (
      <Wrapper>
        <label htmlFor={id}>
          {label}
        </label>
        <Select
          className={hasStyle && 'select'}
          id={id}
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          isSearchable
          placeholder={placeholder}
          defaultValue={defaultOption}
        />
      </Wrapper>
    )
  }
}

export default withApollo(CustomSelect)
