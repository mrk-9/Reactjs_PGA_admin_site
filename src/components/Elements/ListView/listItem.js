import React, { Component } from 'react'
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  display: block
  max-height: ${({ isOpen }) => (isOpen ? '350' : '0')}px;
  transition: max-height 0.25s ease-out
  overflow: hidden
  padding-top: 10px;
  padding-left: 35px
  padding-right: 35px
  
  div {
    span:first-child {
      font-weight: bold
      margin-right: 5px
      
      ::after {
        content: ':'
      }
    }
    margin-bottom: 10px
  }
`

const MainWrapper = styled.div`
  p {
    display: flex
    font-size: 15px
    font-weight: 400
    justify-content: space-between
    padding: 10px
    margin-bottom: 0px
    
    span {
      color: ${({ theme: { colors } }) => colors.primary.dark}
      :hover {
        cursor: url(hand.cur), pointer
      }
    }
  }
  
  p:nth-child(odd) { 
    background: ${({ theme: { colors } }) => colors.gray.gray100}; 
  }
  
  p::after {
    font-weight: 200;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: 0.25s ease-out;
    content: '>'
  }
`

export default class ListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  handleClick = () => {
    const { data, onSelectRow, titleKey } = this.props
    const { ID } = data
    const invoiceNumber = data[titleKey]
    onSelectRow(data, { id: ID, invoiceNumber })
  }

  render () {
    const { data, titleKey } = this.props
    const { isOpen } = this.state
    return (
      <MainWrapper onClick={this.toggle} isOpen={isOpen}>
        <p><span onClick={this.handleClick}>{data[titleKey]}</span></p>
        <ListItemWrapper isOpen={isOpen}>
          {Object.keys(data).map((item, idx) => (
            <div key={idx}>
              <span>{item}</span>
              <span>{data[item]}</span>
            </div>
          ))}
        </ListItemWrapper>
      </MainWrapper>
    )
  }
}
