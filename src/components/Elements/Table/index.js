import React, { Fragment, Component } from 'react'
import { is } from 'ramda'
import 'react-table/react-table.css'
import Button from '../Buttons'
import { inputProp, buttonProp } from './common'
import { Table, FilterInput, Layout } from './helpers'

class TableSearch extends Component {
  constructor () {
    super()
    this.state = {
      searchValue: ''
    }
  }

  onChange = event => {
    const val = event.target.value
    this.setState({ searchValue: val })
  }

  onClick = () => {
    this.setState({searchValue: ''})
  }

  match = (search, val) => new RegExp(`${search}`, 'i').test(`${val}`)

  filterOut = search => data => Object.values(data)
    .find(value => {
      if (is(Object, value)) {
        return this.filterOut(search)(value)
      }
      return this.match(search, value)
    })

  filter = data => {
    const { searchValue } = this.state
    return data.filter(this.filterOut(searchValue))
  }

  render () {
    const { data, ...rest } = this.props
    const { searchValue } = this.state
    const filtered = this.filter(data)
    return (
      <Fragment>
        <Layout>
          <FilterInput onChange={this.onChange} value={searchValue} {...inputProp} />
          <Button onClick={this.onClick} {...buttonProp}>clear</Button>
        </Layout>
        <Table data={filtered} tableSize={data.length} {...rest} />
      </Fragment>
    )
  }
}

export default {
  Table,
  TableSearch
}
