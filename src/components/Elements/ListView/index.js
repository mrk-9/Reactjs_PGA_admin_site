import React, { Component, Fragment } from 'react'
import Pagination from './pagination'
import ListContainer from './listView'

export default class ListViewContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      paginatedData: this.initialData(),
      currentPage: 1,
      noOfPages: this.noOfPages()
    }
  }

  initialData = () => {
    const { data, limitSize } = this.props
    const dataLength = data.length
    return dataLength > limitSize ? data.slice(0, limitSize) : data
  }

  noOfPages = () => {
    const { data, limitSize } = this.props
    const dataLength = data.length
    return Math.ceil(dataLength / limitSize)
  }

  calculatePaginated = currentPage => {
    const { data, limitSize } = this.props

    return currentPage === 1
      ? data.slice(0, limitSize)
      : data.slice((currentPage - 1) * limitSize, currentPage * limitSize)
  }

  handleClick = currentPage => {
    this.setState({ currentPage, paginatedData: this.calculatePaginated(currentPage) })
  }

  render () {
    const { columns, titleKey, onSelectRow, limitSize } = this.props
    const { noOfPages, paginatedData, currentPage } = this.state
    const isPagination = noOfPages > 1
    return (
      <Fragment>
        <ListContainer
          data={paginatedData}
          columns={columns}
          titleKey={titleKey}
          limitSize={limitSize}
          onSelectRow={onSelectRow}
        />
        {isPagination && <Pagination currentPage={currentPage} noOfPages={noOfPages} handleClick={this.handleClick} />}
      </Fragment>
    )
  }
}
