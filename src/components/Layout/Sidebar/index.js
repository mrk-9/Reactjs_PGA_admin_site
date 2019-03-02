import React, { Component } from 'react'
import styled from 'styled-components'
import SidebarMenu from './SidebarMenu'
import MenuButton from '../../Elements/MenuButton'

const TogglerWrapper = styled.span`
  position: fixed;
  top: 12px;
  left: 10px; 
  z-index: 122;
`

const SidebarWrapper = styled.aside`
  background-color: ${props => props.theme.colors.dark};
  flex: 0 0 200px;
  position: relative;
  order: -1;
  color: ${props => props.theme.colors.white};
  transition: 0.25s ease-in-out;
  width: 0;
`

const SidebarToggler = options => <TogglerWrapper><MenuButton {...options} /></TogglerWrapper>

export default class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: true }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render () {
    const style = !this.state.isOpen ? { flex: '0 0 0' } : {}
    return (
      <SidebarWrapper style={style}>
        <SidebarToggler title='Toggle Sidebar' onHandleClick={this.handleClick} />
        <SidebarMenu />
      </SidebarWrapper>
    )
  }
}
